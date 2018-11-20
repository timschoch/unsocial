let unsocial = function (medium) {
    if (medium.enable) {
        console.log('unsocial medium');
        document.body.classList.add('unsocial');

        let url = window.location.href;
        if (url.match(medium.username)) {
            document.body.classList.add('unsocial-mystory');
        }
    }
}
chrome.storage.sync.get((settings) => {
    if (settings.medium) {
        unsocial(settings.medium);
    }
});
