//  This is popup.js file which listen the acitivites of popup.html and communicates with content.js

document.addEventListener('DOMContentLoaded', function() {
    // Listen for messages from the content script
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        if (request.action === 'sendUrl') {
          // Update the popup content with the received URL
          document.getElementById('urlDisplay').innerText = request.url;
        }
      }
    );
  
    // Trigger the 'fakeurgency' action when the button is clicked
    var fakeurgency = document.getElementById('fakeurgency');
    fakeurgency.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'fakeurgency' });
      });
    });

    // Trigger the 'malicious' action when the button is clicked

    var maliciouslink = document.getElementById('malicious');
    maliciouslink.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'malicious' });
      });
    });

    // Trigger the 'addBoundingBox' action when the button is clicked

    var addBoundingBoxButton = document.getElementById('addBoundingBox');
    addBoundingBoxButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'addBoundingBox' });
    });
  });

    // Trigger the 'forced' action when the button is clicked

  var forcedaction = document.getElementById('forced');
    forcedaction.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'forced' });
    });
  });

    // Trigger the 'fakereview' action when the button is clicked

  var fakereview = document.getElementById('fakereview');
    fakereview.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'fakereview' });
    });
  });





  var detailedanalysis = document.getElementById('detailed');
    detailedanalysis.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'detailed' });
    });
  });
  

  });
  



