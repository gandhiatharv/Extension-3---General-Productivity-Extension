importScripts('block.js');

chrome.runtime.onInstalled.addListener(function() {
    // Listen for tab updates
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        // Check if the tab has finished loading
        if (changeInfo.status === 'complete') {
            // Inject a content script into the tab
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['content.js']
            });
        }
    });
});



