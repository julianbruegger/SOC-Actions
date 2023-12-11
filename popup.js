// Function to copy text to clipboard
function copyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

chrome.tabs.executeScript({
  code: `
    var subtitle = document.querySelector(".msportalfx-font-semibold.ext-details-header-subtitle").textContent;
    var title = document.querySelector(".msportalfx-font-semibold.msportalfx-text-ellipsis.ext-details-header-title-text").textContent;
    title + '\\n' + subtitle + '\\n- Analyse';
  `
}, function (result) {
  const combinedText = result[0];

  document.getElementById("copyButton").addEventListener("click", function () {
    // Copy the combined text to the clipboard
    copyToClipboard(combinedText);

    // You can add a message to indicate successful copying here
    // showSuccessMessage("Copied combined content!");
  });
});
