let unsocial = function (medium) {
    if (medium.enable) {
        console.log('thank you for using unsocial to enhance medium');
        document.body.classList.add('unsocial');

        let url = window.location.href;
        if (url.match(medium.username)) {
            document.body.classList.add('unsocial-mystory');
        }

        mainMenuObserver.observe(
            document.querySelector('html'),
            { attributes: true, childList: false, characterData: false }
        );
    }
}
chrome.storage.sync.get((settings) => {
    if (settings.medium) {
        unsocial(settings.medium);
    }
});

// observes if the globalNavPopover is active
let mainMenuObserver = new MutationObserver(() => {
    // console.log( 'oberve main menu' );
    let notificationsList = document.querySelector('.notificationsList');
    if (notificationsList) {
        hideNotifications();
        notificationsObserver.observe(
            notificationsList,
            { attributes: false, childList: true, characterData: false }
        )
    } else {
        notificationsObserver.disconnect();
    }
});

//  observes if more notifications where added to the notificationsList
let notificationsObserver = new MutationObserver(function (mutations) {
    // console.log('observe notifications');
    hideNotifications();
});

// hide all notifications in the notificationsList except replies
function hideNotifications() {
    let notifications = document.querySelectorAll('.notificationsList-button:not([data-activity-type="response_created"])');
    console.log(notifications);
    notifications.forEach(element => {
        element.parentElement.classList.add('unsocial-display-none');
    });
}
