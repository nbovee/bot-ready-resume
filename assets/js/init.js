(function() {
  var isDark = localStorage.getItem('darkMode') ||
    (!localStorage.getItem('lightMode') && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    document.documentElement.classList.add('dark-mode-init');
    document.body.classList.add('dark-mode');
  }
})();