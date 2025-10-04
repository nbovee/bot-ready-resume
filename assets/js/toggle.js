const switcher = document.querySelector('.switch input[type="checkbox"]');

function updateFavicon(isDarkMode) {
    const lightFavicon = document.getElementById('favicon-light');
    const darkFavicon = document.getElementById('favicon-dark');
    const mainFavicon = document.querySelector('link[rel="icon"][type="image/svg+xml"]:not([id])');

    if (lightFavicon && darkFavicon && mainFavicon) {
        const sourceIcon = isDarkMode ? darkFavicon : lightFavicon;
        mainFavicon.href = sourceIcon.href;
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
            document.documentElement.style.colorScheme = 'light only';
            isDark = false;
            break;
        case 'dark':
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.style.colorScheme = 'dark only';
            isDark = true;
            break;
        default:
            isDark = true;
    }

    if (switcher) {
        switcher.checked = isDark;
    }

    updateFavicon(isDark);
}

// Simple toggle: light ↔ dark
if (switcher) {
    switcher.addEventListener('change', function() {
        const nextMode = this.checked ? 'dark' : 'light';

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

