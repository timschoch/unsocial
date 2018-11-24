/*
Store the currently selected settings using browser.storage.sync.
*/
function storeSettings() {
  // console.log('storeSettings');
  browser.storage.sync.set({
    medium: {
      enable: document.querySelector('#medium-enable').checked,
      username: document.querySelector('#medium-username').value.toLowerCase().replace(/^@/, '')
    }
  }).then(getSettings, onError);
}

/*
On opening the options page, fetch stored settings and update the UI with them.
*/
function getSettings() {
  browser.storage.sync.get().then(updateUI, onError);
}

/*
Update the options UI with the settings values retrieved from storage,
or the default settings if the stored settings are empty.
*/
function updateUI(restoredSettings) {
  let settings = Object.assign(
    {},
    {
      medium: {
        enable: false,
        username: ''
      }
    },
    restoredSettings
  );
  // console.log('settings', settings);
  document.querySelector('#medium-enable').checked = settings.medium.enable;
  document.querySelector('#medium-username').value = settings.medium.username;
}

function onError(e) {
  console.error(e);
}

/*
Inititalize view
*/
getSettings();

/*
On blur, save the currently selected settings.
*/
document.querySelector('#medium-enable').addEventListener("blur", storeSettings);
document.querySelector('#medium-username').addEventListener("blur", storeSettings);