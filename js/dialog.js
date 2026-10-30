// <detail-dialog id="dialog-sowing" heading="Aussaat"> … </detail-dialog>
//
// Web component for the detail windows. The page only writes the content,
// the component wraps it in the <dialog> structure (title, close button,
// aria-labelledby). It uses no Shadow DOM, so style.css and the theme
// variables apply as usual, and the content stays readable in the page's HTML.
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

        // The content written between the tags moves below the header
        const content = [...this.childNodes];
        this.dialog.querySelector('article').append(...content);
        this.replaceChildren(this.dialog);
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
