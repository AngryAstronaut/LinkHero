function modifyLinks() {
  document.querySelectorAll('a').forEach(function(e) { e.setAttribute('target', '_blank'); });
  document.querySelector('textarea').value = document.querySelector('main').innerHTML;
}
// always on
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if(!tab.url.includes("chrome://")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: modifyLinks
      });
    }
  }
});
//click to activate
// chrome.action.onClicked.addListener((tab) => {
//     if(!tab.url.includes("chrome://")) {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: modifyLinks
//     });
//   }
// });
