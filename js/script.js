// Interactions of the site. The header is inserted later by loader.js, so the
// listeners sit on the document and check the clicked element (event delegation).

// Menu button: toggles aria-expanded, CSS shows or hides the navigation
document.addEventListener('click', event => {
    const button = event.target.closest('.menu-toggle');
    if (!button) {
        return;
    }

    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
});

// Escape closes the open menu and puts the focus back on the button
document.addEventListener('keydown', event => {
    const openButton = document.querySelector('.menu-toggle[aria-expanded="true"]');

    if (event.key === 'Escape' && openButton) {
        openButton.setAttribute('aria-expanded', 'false');
        openButton.focus();
    }
});

// Theme switch: <html data-theme> holds the theme (set early by theme.js),
// the button only mirrors it with aria-pressed, which CSS uses for the knob
function setTheme(theme) {
    document.documentElement.dataset.theme = theme;

    try {
        localStorage.setItem('theme', theme);
    } catch (error) {
        // Storage blocked: the theme still changes, but is not remembered
    }

    syncThemeToggle();
}

function syncThemeToggle() {
    const button = document.querySelector('.theme-toggle');
    if (button) {
        const isDark = document.documentElement.dataset.theme === 'dark';
        button.setAttribute('aria-pressed', String(isDark));
    }
}

document.addEventListener('click', event => {
    if (!event.target.closest('.theme-toggle')) {
        return;
    }

    const isDark = document.documentElement.dataset.theme === 'dark';
    setTheme(isDark ? 'light' : 'dark');
});

// The header only exists after loader.js has fetched it, then the button
// gets the state of the theme that theme.js already applied
document.addEventListener('componentloaded', syncThemeToggle);
syncThemeToggle();

// Detail dialogs (web component, see dialog.js): each "Mehr erfahren" button names its dialog in
// data-dialog. showModal() makes it a real modal: focus stays inside, the
// page behind is inert, Esc and the close button work without extra code
document.addEventListener('click', event => {
    const button = event.target.closest('[data-dialog]');
    if (!button) {
        return;
    }

    const dialog = document.getElementById(button.dataset.dialog);
    if (dialog) {
        dialog.showModal();
    }
});

// A click on the dimmed backdrop lands on the <dialog> element itself,
// a click on the content lands on an element inside it (the dialog has no
// padding, see style.css), so only the backdrop closes it
document.addEventListener('click', event => {
    if (event.target instanceof HTMLDialogElement) {
        event.target.close();
    }
});

// Chili species (Sorten): accordion below 1200px, five open cards from
// 1200px. matchMedia uses the same breakpoint as style.css and reports
// when the window crosses it
const desktopQuery = window.matchMedia('(min-width: 1200px)');

function syncSpecies() {
    document.querySelectorAll('.species__item').forEach(item => {
        item.open = desktopQuery.matches;
    });
}

desktopQuery.addEventListener('change', syncSpecies);
syncSpecies();

// On the desktop the cards stay open: a click (or Enter/Space) on the title
// must not close them
document.addEventListener('click', event => {
    if (desktopQuery.matches && event.target.closest('.species__item > summary')) {
        event.preventDefault();
    }
});

// Back-to-top link (in the footer): only shown once the page is scrolled
// down a bit, at the top it would just cover content
function syncBackToTop() {
    const link = document.querySelector('.back-to-top');
    if (link) {
        link.classList.toggle('back-to-top--visible', window.scrollY > 600);
    }
}

// passive: the listener never blocks scrolling
window.addEventListener('scroll', syncBackToTop, { passive: true });

// The footer only exists after loader.js has fetched it
document.addEventListener('componentloaded', syncBackToTop);

// Printing: closed <details> would print only their titles, so all chili
// species are opened for the print and put back afterwards
window.addEventListener('beforeprint', () => {
    document.querySelectorAll('.species__item').forEach(item => {
        item.open = true;
    });
});

window.addEventListener('afterprint', syncSpecies);

// Contact form (Über mich): own error messages below each field instead of
// the browser bubbles. The rules stay in the HTML (required, type="email"),
// the script only reads them via field.validity. Without JavaScript the
// browser still validates on its own
const contactForm = document.querySelector('.contact-form form');

const errorMessages = {
    'first-name': { valueMissing: 'Bitte gib deinen Vornamen ein.' },
    'last-name': { valueMissing: 'Bitte gib deinen Nachnamen ein.' },
    email: {
        valueMissing: 'Bitte gib deine E-Mail-Adresse ein.',
        typeMismatch: 'Bitte gib eine gültige E-Mail-Adresse ein, z. B. max@example.com.'
    },
    message: { valueMissing: 'Bitte schreib eine Nachricht.' },
    consent: { valueMissing: 'Bitte bestätige, dass du die Datenschutzerklärung gelesen hast.' }
};

// Checks one field, shows or clears its message and returns whether it is
// valid. Only spaces count as empty too
function validateField(field) {
    const messages = errorMessages[field.id] || {};
    const isBlank = field.type !== 'checkbox' && field.value.trim() === '';
    let message = '';

    if (field.validity.valueMissing || (field.required && isBlank)) {
        message = messages.valueMissing;
    } else if (field.validity.typeMismatch) {
        message = messages.typeMismatch;
    }

    document.getElementById(`${field.id}-error`).textContent = message;

    if (message) {
        field.setAttribute('aria-invalid', 'true');
    } else {
        field.removeAttribute('aria-invalid');
    }

    return !message;
}

if (contactForm) {
    const fields = [...contactForm.querySelectorAll('input, textarea')];
    const status = document.querySelector('.contact-form__status');

    // JavaScript takes over: no browser bubbles, but an error line per field
    // that screen readers read together with the field (aria-describedby)
    contactForm.noValidate = true;

    fields.forEach(field => {
        const error = document.createElement('p');
        error.className = 'form-field__error';
        error.id = `${field.id}-error`;
        field.closest('.form-field').append(error);
        field.setAttribute('aria-describedby', error.id);
    });

    contactForm.addEventListener('submit', event => {
        // The site has no server, the form is never really sent
        event.preventDefault();
        contactForm.dataset.submitted = 'true';

        const invalidFields = fields.filter(field => !validateField(field));

        if (invalidFields.length > 0) {
            status.textContent = '';
            invalidFields[0].focus();
            return;
        }

        contactForm.reset();
        delete contactForm.dataset.submitted;
        status.textContent = 'Danke für deine Nachricht! Hinweis: Diese Website ist eine Prüfungsarbeit ohne Server, die Nachricht wird deshalb nicht wirklich verschickt.';
    });

    // After the first attempt, fields are checked again when they are left,
    // and an error disappears as soon as the input is corrected
    contactForm.addEventListener('focusout', event => {
        if (contactForm.dataset.submitted && fields.includes(event.target)) {
            validateField(event.target);
        }
    });

    contactForm.addEventListener('input', event => {
        if (event.target.getAttribute('aria-invalid') === 'true') {
            validateField(event.target);
        }
    });
}
