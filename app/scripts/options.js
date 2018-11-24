/*
Store the currently selected settings using browser.storage.sync.
*/
function storeSettings() {
  // console.log('storeSettings');
  browser.storage.sync.set({
    medium: {
      enable: document.querySelector('#medium-enable').checked,
      username: document.querySelector('#medium-username').value.toLowerCase().replace(/^@/,'')
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
  // console.log('restoredSettings', restoredSettings);
  document.querySelector('#medium-enable').checked = restoredSettings.medium.enable;
  document.querySelector('#medium-username').value = restoredSettings.medium.username;
}

function onError(e) {
  console.error(e);
}

/*
On opening the options page, fetch stored settings and update the UI with them.
*/
browser.storage.sync.get({
  medium: {
    enable: false,
    username: ''
  }
}, updateUI);

/*
On blur, save the currently selected settings.
*/
document.querySelector('#medium-enable').addEventListener("blur", storeSettings);
document.querySelector('#medium-username').addEventListener("blur", storeSettings);