chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
            // Your existing code to capture data
            var IRID = document.querySelector(".msportalfx-font-semibold.ext-details-header-subtitle").textContent;
            var title = document.querySelector(".msportalfx-font-semibold.msportalfx-text-ellipsis.ext-details-header-title-text").textContent;
            var clip = title + '\n' + IRID + '\n- Analyse';

            // New code to copy to the clipboard using the Clipboard API
            navigator.clipboard.writeText(clip)
                .then(() => {
                    console.log('Text copied to clipboard:', clip);
                    // Optionally, provide user feedback
                    alert('Content copied to clipboard!');
                })
                .catch((error) => {
                    console.error('Error copying to clipboard:', error);
                });
        }
    });
});