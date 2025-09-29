const body = document.body;
const switcher = document.querySelector('.js-toggle');

function updateFavicon(isDarkMode) {
    const favicon = document.querySelector('link[rel="icon"][type="image/svg+xml"]:not([media])');
    if (favicon) {
        favicon.href = isDarkMode ? '/images/favicon-dark.svg' : '/images/favicon-light.svg';
    }
}

// Add dark mode classes and wrappers on click, store user preference through sessions
if (switcher) {
    switcher.addEventListener('click', function() {
        this.classList.toggle('js-toggle--checked');
        this.classList.add('js-toggle--focus');
        if (this.classList.contains('js-toggle--checked')) {
            body.classList.add('dark-mode');
            updateFavicon(true);
            localStorage.setItem('darkMode', 'true');
            localStorage.removeItem('lightMode');
        } else {
            body.classList.remove('dark-mode');
            updateFavicon(false);
            localStorage.setItem('lightMode', 'true');
            setTimeout(() => {
                localStorage.removeItem('darkMode');
            }, 100);
        }
    });
}

// Check Storage or System Preference on first visit and sync with initialization
const isDarkMode = localStorage.getItem('darkMode') ||
    (!localStorage.getItem('lightMode') && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

if (switcher) {
    if (isDarkMode) {
        switcher.classList.add('js-toggle--checked');
        body.classList.add('dark-mode');
        updateFavicon(true);
    } else {
        switcher.classList.remove('js-toggle--checked');
        body.classList.remove('dark-mode');
        updateFavicon(false);
    }
}

document.documentElement.classList.remove('dark-mode-init');