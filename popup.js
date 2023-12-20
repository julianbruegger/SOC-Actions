document.addEventListener('DOMContentLoaded', function () {
  const copyButton = document.getElementById('copyButton');

  console.log('Popup loaded successfully!');  // Add this line

  copyButton.addEventListener('click', function () {
    console.log('Save button clicked');  // Add this line

    var bgPage = chrome.extension.getBackgroundPage();
    chrome.runtime.sendMessage({ msg: "startFunc" });
    // Here paste() is a function that returns value.

  });
});



chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "copyToClipboard") {
    const targetDiv = document.querySelector('YOUR_DIV_SELECTOR');
    if (targetDiv) {
      const contentToCopy = targetDiv.textContent.trim();
      navigator.clipboard.writeText(contentToCopy)
        .then(() => {
          console.log("Content copied to clipboard:", contentToCopy);
        })
        .catch(error => {
          console.error("Error copying to clipboard:", error);
        });
    } else {
      console.error("Div not found");
    }
  }
});
const divContent = document.querySelector('.msportalfx-font-semibold.msportalfx-text-ellipsis.ext-details-header-title-text');
if (divContent) {
  const textToCopy = divContent.textContent;
  navigator.clipboard.writeText(textToCopy);
}