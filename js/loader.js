// Loads shared page parts (header, footer) from components/ into every page,
// so they only have to be maintained in one place.

// Fetches the HTML file at `path` and inserts it into the element matching `selector`.
// Returns the promise, so other scripts can wait until the component is in the DOM.
function loadComponent(selector, path) {
    const target = document.querySelector(selector);

    return fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not load ${path} (${response.status})`);
            }
            return response.text();
        })
        .then(html => {
            target.innerHTML = html;
            markCurrentPage(target);
            // Tells other scripts (script.js) that the component is now in the DOM
            target.dispatchEvent(new CustomEvent('componentloaded', { bubbles: true }));
        })
        .catch(error => console.error(error));
}

// Sets aria-current="page" on navigation links that point to the current page
function markCurrentPage(container) {
    const currentPage = location.pathname.split('/').pop() || 'index.html';

    container.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.setAttribute('aria-current', 'page');
        }
    });
}

loadComponent('#site-header', 'components/header.html');
loadComponent('#site-footer', 'components/footer.html');
