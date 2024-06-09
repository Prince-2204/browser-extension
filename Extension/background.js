
// ************************* This Code is to Take the Screenshots*******************************
function getCSRFToken() {
    const name = 'csrftoken';
    const cookieValue = document.cookie.split(';').find(cookie => cookie.trim().startsWith(`${name}=`));
    if (cookieValue) {
        return cookieValue.split('=')[1];
    } else {
        return null;
    }
  }
  
let id = 100;

chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.captureVisibleTab({ format: 'png' }, (screenshotDataUrl) => {
        const viewTabUrl = chrome.extension.getURL('screenshot.html?id=' + id++);
        let targetId = null;

        chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {
            if (tabId != targetId || changedProps.status != "complete")
                return;
            chrome.tabs.onUpdated.removeListener(listener);

            const views = chrome.extension.getViews();
            for (let i = 0; i < views.length; i++) {
                let view = views[i];
                if (view.location.href == viewTabUrl) {
                    view.setScreenshotUrl(screenshotDataUrl);
                    break;
                }
            }
        });

        chrome.tabs.create({ url: viewTabUrl }, (tab) => {
            targetId = tab.id;
        });

        // Convert the data URL to a Blob
        const base64ImageContent = screenshotDataUrl.split(';base64,').pop();
        const screenshotBlob = b64toBlob(base64ImageContent, 'image/png');

        // Send the screenshot Blob to your Django backend
        sendScreenshotToBackend(screenshotBlob);
    });
});























function sendScreenshotToBackend(screenshotBlob) {
    const formData = new FormData();
    // const csrfToken = getCSRFToken();
    formData.append('screenshot', screenshotBlob, 'screenshot.png');

    fetch('http://127.0.0.1:8000/upload-screenshot/', {
        method: 'POST',
        // headers: {
            // 'Content-Type': 'multipart/form-data',
            // 'X-CSRFToken': csrfToken,
            // 'Origin': window.location.origin,
        //   },
        
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Screenshot sent to backend:', data);
    })
    .catch(error => {
        console.error('Error sending screenshot to backend:', error);
    });
}

// // Function to convert base64 image to Blob
function b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}

















// new experiment

// chrome.browserAction.onClicked.addListener(() => {

// function capturess(){
//     chrome.tabs.captureVisibleTab({ format: 'png' }, (screenshotDataUrl) => {
//         const viewTabUrl = chrome.extension.getURL('screenshot.html?id=' + id++);
//         let targetId = null;

//         chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {
//             if (tabId != targetId || changedProps.status != "complete")
//                 return;
//             chrome.tabs.onUpdated.removeListener(listener);

//             const views = chrome.extension.getViews();
//             for (let i = 0; i < views.length; i++) {
//                 let view = views[i];
//                 if (view.location.href == viewTabUrl) {
//                     view.setScreenshotUrl(screenshotDataUrl);
//                     break;
//                 }
//             }
//         });

//         chrome.tabs.create({ url: viewTabUrl }, (tab) => {
//             targetId = tab.id;
//         });

//         // Convert the data URL to a Blob
//         const base64ImageContent = screenshotDataUrl.split(';base64,').pop();
//         const screenshotBlob = b64toBlob(base64ImageContent, 'image/png');

//         // Send the screenshot Blob to your Django backend
//         sendScreenshotToBackend(screenshotBlob);
//     });
// // });

// }



// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if (request.action === 'fakeurgency') {
//         capturess() ;
//       }
//     }
//   );


  


// document.addEventListener('DOMContentLoaded', function() {
//     const screenshotButton = document.getElementById('ss');
//     screenshotButton.addEventListener('click', () => {
//         chrome.tabs.captureVisibleTab({ format: 'png' }, (screenshotDataUrl) => {
//             const viewTabUrl = chrome.extension.getURL('screenshot.html?id=' + id++);
//             let targetId = null;

//             chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {
//                 if (tabId != targetId || changedProps.status != "complete")
//                     return;
//                 chrome.tabs.onUpdated.removeListener(listener);

//                 const views = chrome.extension.getViews();
//                 for (let i = 0; i < views.length; i++) {
//                     let view = views[i];
//                     if (view.location.href == viewTabUrl) {
//                         view.setScreenshotUrl(screenshotDataUrl);
//                         break;
//                     }
//                 }
//             });

//             chrome.tabs.create({ url: viewTabUrl }, (tab) => {
//                 targetId = tab.id;
//             });

//             // Convert the data URL to a Blob
//             const base64ImageContent = screenshotDataUrl.split(';base64,').pop();
//             const screenshotBlob = b64toBlob(base64ImageContent, 'image/png');

//             // Send the screenshot Blob to your Django backend
//             sendScreenshotToBackend(screenshotBlob);
//         });
//     });
// });

// function sendScreenshotToBackend(blob) {
//     // You would implement your logic to send the Blob to your Django backend here
//     // This is just a placeholder function
//     console.log('Sending screenshot to backend...', blob);
// }

// function b64toBlob(b64Data, contentType='', sliceSize=512) {
//     const byteCharacters = atob(b64Data);
//     const byteArrays = [];

//     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//         const slice = byteCharacters.slice(offset, offset + sliceSize);

//         const byteNumbers = new Array(slice.length);
//         for (let i = 0; i < slice.length; i++) {
//             byteNumbers[i] = slice.charCodeAt(i);
//         }

//         const byteArray = new Uint8Array(byteNumbers);
//         byteArrays.push(byteArray);
//     }

//     const blob = new Blob(byteArrays, {type: contentType});
//     return blob;
// }
