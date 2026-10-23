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
