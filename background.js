// background.js
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: chrome.runtime.getURL("blocked.html") };
  },
  { urls: ["*://*.koffer24.de/*",
			"*://*.scielo.br/*",] },
  ["blocking"]
);
