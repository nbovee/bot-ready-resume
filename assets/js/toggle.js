const switcher = document.querySelector('.js-toggle');

function updateFavicon(isDarkMode) {
    const favicon = document.querySelector('link[rel="icon"][type="image/svg+xml"]:not([media])');
    if (favicon) {
        favicon.href = isDarkMode ? '/images/favicon-dark.svg' : '/images/favicon-light.svg';
    }
}

function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyTheme(mode) {
    let isDark;

    switch(mode) {
        case 'light':
            document.documentElement.setAttribute('data-theme', 'light');
            isDark = false;
            break;
        case 'dark':
            document.documentElement.setAttribute('data-theme', 'dark');
            isDark = true;
            break;
        default:
            isDark = true;
    }

    if (switcher) {
        switcher.classList.toggle('js-toggle--checked', isDark);
    }

    updateFavicon(isDark);
}

// Simple toggle: light ↔ dark
if (switcher) {
    switcher.addEventListener('click', function() {
        this.classList.add('js-toggle--focus');

        const currentMode = localStorage.getItem('themeMode');
        const nextMode = currentMode === 'light' ? 'dark' : 'light';

        localStorage.setItem('themeMode', nextMode);
        applyTheme(nextMode);
    });
}

// Handle print events to temporarily force light theme
let preIntentTheme = null;

window.addEventListener('beforeprint', function() {
    preIntentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', 'light');
});

window.addEventListener('afterprint', function() {
    if (preIntentTheme) {
        document.documentElement.setAttribute('data-theme', preIntentTheme);
        preIntentTheme = null;
    }
});

function getInitialTheme() {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
        return savedMode;
    }

    return getSystemPreference() ? 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
}

const initialMode = getInitialTheme();
applyTheme(initialMode);

