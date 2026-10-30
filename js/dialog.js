// <detail-dialog id="dialog-sowing" heading="Aussaat" image="images/growing-sowing.jpg" image-alt="…"> … </detail-dialog>
// The optional image-position (CSS object-position, e.g. "50% 30%") moves
// the visible part of the photo.
//
// Web component for the detail windows. The page only writes the content,
// the component wraps it in the <dialog> structure (title, close button,
// optional header image, aria-labelledby) and adds buttons to the
// neighbouring dialogs of the same page. It uses no Shadow DOM, so
// style.css and the theme variables apply as usual, and the content stays
// readable in the page's HTML.
//
// Load this script with defer: the component reads its children, which must
// be parsed by then.
class Dialog extends HTMLElement {
    connectedCallback() {
        // Moving the element in the DOM calls this again, build only once
        if (this.dialog) {
            return;
        }

        // The id is required anyway: data-dialog on the buttons refers to it
        const titleId = `${this.id}-title`;

        const template = document.createElement('template');
        template.innerHTML = `
            <dialog>
                <article class="dialog__content">
                    <header class="dialog__header">
                        <h2></h2>
                        <form method="dialog">
                            <button class="dialog__close" type="submit" aria-label="Schließen">✕</button>
                        </form>
                    </header>
                </article>
            </dialog>`;

        this.dialog = template.content.querySelector('dialog');
        this.dialog.setAttribute('aria-labelledby', titleId);

        const title = this.dialog.querySelector('h2');
        title.id = titleId;
        title.textContent = this.getAttribute('heading');

        const article = this.dialog.querySelector('article');

        if (this.hasAttribute('image')) {
            const image = document.createElement('img');
            image.className = 'dialog__image';
            image.src = this.getAttribute('image');
            image.alt = this.getAttribute('image-alt') ?? '';
            image.width = 800;
            image.height = 600;
            image.loading = 'lazy';
        if (this.hasAttribute('image-position')) {
            image.style.objectPosition = this.getAttribute('image-position');
        }
            article.append(image);
        }

        article.append(...this.childNodes);

        // style.css numbers the steps with list-style: none, Safari then
        // drops the list role, so it is set explicitly
        article.querySelectorAll('ol').forEach(list => list.setAttribute('role', 'list'));

        const pager = this.createPager();
        if (pager) {
            article.append(pager);
        }

        this.dialog.addEventListener('keydown', event => this.handleKeydown(event));
        this.enableSwipeToClose();
        // Fires when the dialog opens and when the window size changes; the
        // timeout keeps the class change out of the observer callback
        new ResizeObserver(() => setTimeout(() => this.updateScrollbar())).observe(this.dialog);

        this.replaceChildren(this.dialog);
    }

    // The dialog before (-1) or after (1) this one in page order, if any.
    // It may not be upgraded yet, so only its attributes can be read
    neighbour(offset) {
        const all = [...document.querySelectorAll('detail-dialog')];
        return all[all.indexOf(this) + offset];
    }

    // "Back" and "next" buttons. A single dialog on a page gets none
    createPager() {
        const previous = this.neighbour(-1);
        const next = this.neighbour(1);

        if (!previous && !next) {
            return null;
        }

        const pager = document.createElement('nav');
        pager.className = 'dialog__pager';
        pager.setAttribute('aria-label', 'Weitere Einträge');

        if (previous) {
            pager.append(this.createPagerButton(previous, 'Zurück', false));
        }
        if (next) {
            pager.append(this.createPagerButton(next, 'Weiter', true));
        }

        return pager;
    }

    // Visible: arrow and title. "Zurück: " / "Weiter: " is only for screen
    // readers, like "zu Habanero" on the "Mehr erfahren" buttons
    createPagerButton(target, label, isNext) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'dialog__pager-button button button--secondary';
        button.classList.toggle('dialog__pager-button--next', isNext);

        const hidden = document.createElement('span');
        hidden.className = 'visually-hidden';
        hidden.textContent = `${label}: `;

        const arrow = document.createElement('span');
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = isNext ? '→' : '←';

        const title = document.createTextNode(target.getAttribute('heading'));

        button.append(...(isNext ? [hidden, title, ' ', arrow] : [arrow, ' ', hidden, title]));
        button.addEventListener('click', () => this.switchTo(target));

        return button;
    }

    // The focus goes to the card button of the new dialog first, so closing
    // the new dialog returns there and not to the card of this one
    switchTo(target) {
        this.close();
        document.querySelector(`[data-dialog="${target.id}"]`)?.focus({ preventScroll: true });
        target.showModal();
    }

    // Shows the scrollbar (class for style.css) only if clearly more is hidden
    // than the bottom padding, see the comment there. The scrollbar makes the
    // content narrower, so the image gets lower and less is hidden: once it
    // is shown it stays until the overflow is 6px below the limit, otherwise
    // the two measurements would switch it on and off in turn
    updateScrollbar() {
        const article = this.dialog.querySelector('article');
        const padding = parseFloat(getComputedStyle(article).paddingBottom);
        const hidden = this.dialog.scrollHeight - this.dialog.clientHeight;
        const limit = this.dialog.classList.contains('dialog--scrolls') ? padding * 1.5 - 6 : padding * 1.5;

        this.dialog.classList.toggle('dialog--scrolls', hidden > limit);
    }

    // Arrow keys switch like the buttons. With a modifier they are left to
    // the browser (Alt+← is "back")
    handleKeydown(event) {
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
            return;
        }

        const target = {
            ArrowLeft: this.neighbour(-1),
            ArrowRight: this.neighbour(1),
        }[event.key];

        if (target) {
            this.switchTo(target);
        }
    }

    // Bottom sheet (below 768px, see style.css): the title bar can be
    // dragged down and closes the dialog from 100px on, otherwise it snaps back
    enableSwipeToClose() {
        const header = this.dialog.querySelector('.dialog__header');
        const desktop = window.matchMedia('(min-width: 768px)');
        let startY = null;
        let distance = 0;

        header.addEventListener('pointerdown', event => {
            if (desktop.matches || event.target.closest('button')) {
                return;
            }

            startY = event.clientY;
            distance = 0;
            header.setPointerCapture(event.pointerId);
            // The dialog follows the finger without the transition from style.css
            this.dialog.style.transition = 'none';
        });

        header.addEventListener('pointermove', event => {
            if (startY === null) {
                return;
            }

            distance = Math.max(0, event.clientY - startY);
            this.dialog.style.transform = `translateY(${distance}px)`;
        });

        // With the inline styles gone, the transition from style.css animates
        // both the snap back and the closing from the current position
        const release = () => {
            if (startY === null) {
                return;
            }

            startY = null;
            this.dialog.style.transition = '';
            this.dialog.style.transform = '';
            if (distance > 100) {
                this.dialog.close();
            }
        };

        header.addEventListener('pointerup', release);
        header.addEventListener('pointercancel', release);
    }

    // Same names as on <dialog>, so script.js can treat both alike
    showModal() {
        this.dialog.showModal();
    }

    close() {
        this.dialog.close();
    }
}

customElements.define('detail-dialog', Dialog);
