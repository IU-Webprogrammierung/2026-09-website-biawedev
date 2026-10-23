// Applies the color theme before the page is drawn. This file is loaded
// without defer in <head>, otherwise the page would flash in the light theme
// first. Without a saved choice the system setting decides.
(function () {
    let theme = null;

    try {
        theme = localStorage.getItem('theme');
    } catch (error) {
        // localStorage can be blocked (e.g. private mode) – fall back to the system setting
    }

    if (theme !== 'light' && theme !== 'dark') {
        theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.documentElement.dataset.theme = theme;
})();
