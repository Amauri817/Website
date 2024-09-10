window.onload = function() {
    if (window.location.pathname.endsWith('.html')) {
      let newPath = window.location.pathname.replace('.html', '');
      window.history.replaceState({}, document.title, newPath);
    }
  };