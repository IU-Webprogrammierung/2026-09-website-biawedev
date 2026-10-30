// Applies the color theme before the page is drawn. This file is loaded
// without defer in <head>, otherwise the page would flash in the light theme
// first. Without a saved choice the system setting decides.
// It also hides the page (class "js" without "is-ready", see style.css) until
// loader.js has inserted header and footer, so nothing jumps while loading.
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
    document.documentElement.classList.add('js');

    // Safety net: show the page even if loader.js fails or is very slow
    setTimeout(function () {
        document.documentElement.classList.add('is-ready');
    }, 2000);
})();
