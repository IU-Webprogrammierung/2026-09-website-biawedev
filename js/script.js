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
