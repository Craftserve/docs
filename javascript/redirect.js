(function() {
    if (window.location.pathname.startsWith("/pl-PL") || window.location.pathname.startsWith("/en-US")) {
        return;
    }

    const lang = (navigator.language || navigator.userLanguage)?.toLowerCase();

    if (lang.startsWith('pl')) {
        window.location.replace('/pl-PL/');
    } else {
        window.location.replace('/en-US/');
    }
})();
