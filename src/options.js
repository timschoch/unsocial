let browser = chrome || browser;
const mediumEnable = document.querySelector('#medium-enable');
const mediumUsername = document.querySelector('#medium-username');

/*
Store the currently selected settings using browser.storage.sync.
*/
function storeSettings() {
  // sanitize some settings
  let mediumUsernameValue = mediumUsername.value.replace(/^@/,'');
  browser.storage.sync.set({
    medium: {
      enable: mediumEnable.checked,
      username: mediumUsernameValue
    }
  },() => { 
    browser.storage.sync.get(updateUI);
  });
}

/*
Update the options UI with the settings values retrieved from storage,
or the default settings if the stored settings are empty.
*/
function updateUI(restoredSettings) {
    console.log( 'restoredSettings', restoredSettings );
    mediumEnable.checked = restoredSettings.medium.enable || false;
    mediumUsername.value = restoredSettings.medium.username || "";
}

function onError(e) {
  console.error(e);
}

/*
On opening the options page, fetch stored settings and update the UI with them.
*/
browser.storage.sync.get(updateUI);

/*
On blur, save the currently selected settings.
*/
mediumEnable.addEventListener("blur", storeSettings);
mediumUsername.addEventListener("blur", storeSettings);