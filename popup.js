// popup.js
document.addEventListener('DOMContentLoaded', function() {
  var blockButton = document.getElementById('blockButton');
  blockButton.addEventListener('click', blockWebsite);
});

function blockWebsite() {
  chrome.scripting.executeScript({
    target: { tabId: -1 },
    function: blockRequest
  });
}

function blockRequest() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tab = tabs[0];
    chrome.webRequest.onBeforeRequest.addListener(
      function(details) {
        chrome.tabs.update(tab.id, { url: chrome.runtime.getURL("blocked.html") });
        return { cancel: true };
      },
      { urls: ["*://*.koffer24.de/*"], tabId: tab.id },
      ["blocking"]
    );
  });
}