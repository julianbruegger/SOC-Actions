// content.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'copyToClipboard') {
        // Use the Clipboard API to copy text to clipboard
        document.addEventListener('copy', function (event) {
            event.clipboardData.setData('text/plain', request.clip);
            event.preventDefault();
        });

        document.execCommand('copy');
    }
});
