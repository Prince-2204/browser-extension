// function for showing the url which is beign fetched

async function sendUrlToPopup() {
  var currentUrl = window.location.href;
  chrome.runtime.sendMessage({ action: 'sendUrl', url: currentUrl });
  
}


// function for CSRFToken
function getCSRFToken() {
  const name = 'csrftoken';
  const cookieValue = document.cookie.split(';').find(cookie => cookie.trim().startsWith(`${name}=`));
  if (cookieValue) {
      return cookieValue.split('=')[1];
  } else {
      return null;
  }
}



// code for sending the url to backend and getting the string from backend to detect the Fakeurgency
// dark pattern in website

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'fakeurgency') {
      sendUrlToPopup();
      const url = window.location.href;

// Send the URL to the backend
      const backendUrl = 'http://127.0.0.1:8000/api/receive-url/';

      // const data = { url };
      const data = {
        url: url
      };

      fetch(backendUrl, {
  // method: 'POST',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCSRFToken(),
        'Origin': window.location.origin,
      },
      body: JSON.stringify(data)
      })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Response from backend:', data);
    })
    .catch(error => {
      console.error('Error sending URL to backend:', error);
    });
      }
    }
);


function fetchurgencyStringFromAPI() {
  // API endpoint URL
  const apiUrl = 'http://127.0.0.1:8000/api/urgencystring/';

  // Options for the fetch request
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken(),
          'Origin': window.location.origin,
          
      }
  };

  // Make the fetch request
  fetch(apiUrl, options)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          // Handle the response data from the API
          console.log('Response from API:', data);
          const stringFromAPI = data;
          if (stringFromAPI) {
            
                alert(stringFromAPI)
            
              
            } else {
              console.error('String from API is undefined');
            }
        
      })
      .catch(error => {
          // Handle any errors that occurred during the fetch request
          console.error('Error fetching data from API:', error);
      });
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'fakeurgency') {
      fetchurgencyStringFromAPI();
    }
  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'fakeurgency') {
        fetchStringFromAPI();
    }
  }
);



// *******Code to get get the data regarding the malicious link present in any commercial website*********


function fetchmaliciousStringFromAPI() {
  // API endpoint URL
  const apiUrl = 'http://127.0.0.1:8000/api/maliciousstring/';

  // Options for the fetch request
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken(),
          'Origin': window.location.origin,
          
      }
  };

  // Make the fetch request
  fetch(apiUrl, options)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          // Handle the response data from the API
          console.log('Response from API:', data);
          
          const stringFromAPI = data;
          if (stringFromAPI) {
            
                alert(stringFromAPI)
              
            } else {
              console.error('String from API is undefined');
            }
        
      })
      .catch(error => {
          // Handle any errors that occurred during the fetch request
          console.error('Error fetching data from API:', error);
      });
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'malicious') {
      fetchmaliciousStringFromAPI();
    }
  }
);



// ********************code to get data regarding forced account creation***********************

function fetchforcedStringFromAPI() {
  // API endpoint URL
  const apiUrl = 'http://127.0.0.1:8000/api/forced-string/';

  // Options for the fetch request
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken(),
          'Origin': window.location.origin,
         
      }
  };

  // Make the fetch request
  fetch(apiUrl, options)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          // Handle the response data from the API
          console.log('Response from API:', data);
          
          const stringFromAPI = data;
          if (stringFromAPI) {
            
           
                alert(stringFromAPI)
            
            } else {
              console.error('String from API is undefined');
            }
        // });
      })
      .catch(error => {
          // Handle any errors that occurred during the fetch request
          console.error('Error fetching data from API:', error);
      });
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'forced') {
      fetchforcedStringFromAPI();
    }
  }
);


//  ****************code to fetch the url and send fake review alert*********************

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'fakereview') {
      sendUrlToPopup();
      const url = window.location.href;

// Send the URL to the backend
      const backendUrl = 'http://127.0.0.1:8000/api/receive-urlnew/';

      // const data = { url };
      const data = {
        url: url
      };

      fetch(backendUrl, {
  // method: 'POST',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCSRFToken(),
        'Origin': window.location.origin,
      },
      body: JSON.stringify(data)
      })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Response from backend:', data);
    })
    .catch(error => {
      console.error('Error sending URL to backend:', error);
    });
      }
    }
);


function fetchfakeStringFromAPI() {
  // API endpoint URL
  const apiUrl = 'http://127.0.0.1:8000/api/fakereviewstring/';

  // Options for the fetch request
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken(),
          'Origin': window.location.origin,
          
      }
  };

  // Make the fetch request
  fetch(apiUrl, options)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          
          console.log('Response from API:', data);
          
          const stringFromAPI = data;
          if (stringFromAPI) {
            
                alert(stringFromAPI)
            
            } else {
              console.error('String from API is undefined');
            }
        
      })
      .catch(error => {
          // Handle any errors that occurred during the fetch request
          console.error('Error fetching data from API:', error);
      });
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'fakereview') {
      fetchfakeStringFromAPI();
      
    }
  }
);


// *********Code to create the detailed analysis of the website**************

function detailedStringFromAPI() {
  // API endpoint URL
  const apiUrl = 'http://127.0.0.1:8000/api/detailedreport/';

  // Options for the fetch request
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken(),
          'Origin': window.location.origin,
          // You might need to include additional headers here if required by your API
      }
  };

  // Make the fetch request
  fetch(apiUrl, options)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          // Handle the response data from the API
          console.log('Response from API:', data);
          
          if (Array.isArray(data)) {
            alert(data.join("\n")); 
        } else {
            
            alert(data);
        }
         
      })
      .catch(error => {
          // Handle any errors that occurred during the fetch request
          console.error('Error fetching data from API:', error);
      });
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'detailed') {
      detailedStringFromAPI();
      
    }
  }
);

// *****************code to add bounding box arround the darkpattern elements***********************


// Function to send the current URL to the extension popup
async function sendUrlToPopup() {
  var currentUrl = window.location.href;
  chrome.runtime.sendMessage({ action: 'sendUrl', url: currentUrl });
  
}

// function addTextBoxAndBoundingBox(element) {
//   // Add a text box with the message "Dark Pattern Detected"
//   var textBox = document.createElement('div');
//   textBox.textContent = 'Dark Pattern Detected';
//   textBox.style.position = 'absolute';
//   textBox.style.background = 'rgba(255, 0, 0, 0.7)';
//   textBox.style.color = '#fff';
//   textBox.style.padding = '5px';
//   textBox.style.top = element.offsetTop + 'px';
//   textBox.style.left = element.offsetLeft + 'px';
//   document.body.appendChild(textBox);

//   // Add a bounding box
//   var boundingBox = document.createElement('div');
//   boundingBox.style.display = 'inline-block';
//   boundingBox.style.position = 'absolute';
//   boundingBox.style.border = '2px solid red';
//   boundingBox.style.background = 'rgba(255, 0, 0, 0.7)';
//   boundingBox.style.width = element.offsetWidth - 5 + 'px';
//   boundingBox.style.height = element.offsetHeight -5+ 'px';
//   boundingBox.style.top = element.offsetTop -5 + 'px';
//   boundingBox.style.left = element.offsetLeft-5 + 'px';
//   document.body.appendChild(boundingBox);
// }

function addTextBoxAndBoundingBox(element) {
  // Add a text box with the message "Dark Pattern Detected"
  var textBox = document.createElement('div');
  textBox.textContent = 'Dark Pattern Detected';
  textBox.style.position = 'absolute';
  textBox.style.background = 'rgba(255, 0, 0, 0.7)';
  textBox.style.color = '#fff';
  textBox.style.padding = '5px';
  textBox.style.zIndex = '1000';  // Ensure the text box is above other elements
  textBox.style.top = element.offsetTop + 'px';
  textBox.style.left = element.offsetLeft + 'px';
  document.body.appendChild(textBox);

  // Add a bounding box
  var boundingBox = document.createElement('div');
  boundingBox.style.position = 'absolute';
  boundingBox.style.border = '2px solid red';
  boundingBox.style.width = element.offsetWidth + 'px';
  boundingBox.style.height = element.offsetHeight + 'px';
  boundingBox.style.top = element.offsetTop + 'px';
  boundingBox.style.left = element.offsetLeft + 'px';
  boundingBox.style.boxSizing = 'border-box'; // Include border in the element's total width and height
  boundingBox.style.zIndex = '999';  // Ensure the bounding box is below the text box
  document.body.appendChild(boundingBox);
}




// function getCSRFToken() {
//   const name = 'csrftoken';
//   const cookieValue = document.cookie.split(';').find(cookie => cookie.trim().startsWith(`${name}=`));
//   if (cookieValue) {
//       return cookieValue.split('=')[1];
//   } else {
//       return null;
//   }
// }

// Extract the URL from the current webpage
const url = window.location.href;

// Send the URL to the backend
const backendUrl = 'http://127.0.0.1:8000/api/websites/';

const data = { url };

fetch(backendUrl, {
  // method: 'POST',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': getCSRFToken(),
    'Origin': window.location.origin,
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('Response from backend:', data);
})
.catch(error => {
  console.error('Error sending URL to backend:', error);
});




// **************Code to get the Percentage of dark Pattern in the website***********************
function fetchStringFromAPI() {
  // API endpoint URL
  const apiUrl = 'http://127.0.0.1:8000/api/send-string/';

  // Options for the fetch request
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken(),
          'Origin': window.location.origin,
          
      }
  };

  // Make the fetch request
  fetch(apiUrl, options)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          // Handle the response data from the API
          console.log('Response from API:', data);
          
          const stringFromAPI = data;
          if (stringFromAPI) {
            
            
                alert(stringFromAPI+"% Dark Pattern Detected in this website,Please Be Aware while Shopping!")
            
              
            } else {
              console.error('String from API is undefined');
            }
        // });
      })
      .catch(error => {
          // Handle any errors that occurred during the fetch request
          console.error('Error fetching data from API:', error);
      });
}


fetchStringFromAPI();

// ***************Code to get the the tags which contains dark pattern***************

function fetchTagsFromBackend() {
  return new Promise(function(resolve, reject) {

    // Make an HTTP request to your backend API to fetch the list of tags
    fetch('http://127.0.0.1:8000/api/tags/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })

      .then(data => {
        console.log('Data received from backend:', data); // Log the data received from the backend
        if (!data || !Array.isArray(data)) {
          throw new Error('Tags are not valid or not an array');
        }
        resolve(data);
      })
      .catch(error => reject(error));
  });
}

// Listen for messages from the extension popup or other sources
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'addBoundingBox') {
      sendUrlToPopup();
      
      // Fetch tags from the backend
      fetchTagsFromBackend()
        .then(function(tags) {
          if (!tags || !Array.isArray(tags)) {
            throw new Error('Tags are not valid or not an array');
          }
          // Loop through the received tags and add bounding boxes
          tags.forEach(function(tag) {
            
            var targetElements = document.querySelectorAll(tag);
            if (targetElements.length > 0) {
              targetElements.forEach(function(element) {
                addTextBoxAndBoundingBox(element);
              });
            } else {
              console.error('No matching elements found for selector: ' + tag);
            }
          });
        })
        .catch(function(error) {
          console.error('Error fetching tags from backend:', error);
        });
    }
  }
);










































































































































































































