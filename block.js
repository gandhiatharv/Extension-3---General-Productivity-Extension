// block.js

let timer;
let intervals = 8; // Number of Pomodoro intervals
let workDuration = 50 * 60; // 50 minutes in seconds
let shortBreakDuration = 10 * 60; // 10 minutes in seconds
let longBreakDuration = 10 * 60; // 10 minutes in seconds
let currentInterval = 0; // Start with the first work interval
let pomodoroCount = 0; // Initialize the Pomodoro count
let currentLongCount=0
let gamestate = 1
let blockNumber = 0
let hhhh =("H", "Bye", "Cry")
 // Importing a named export from module1.js
//import { allowedSites } from './content.js';

 
// main.js

// Modify the variable declared in script1.js
//allowedSites.push("www.newsite.com");

//console.log(allowedSites); // Check if the modification is successful

// Function to check if a site is allowed
//function isSiteAllowed(url) {
//    const hostname = new URL(url).hostname;
//    return allowedSites.includes(hostname);
//}

// Example usage
//console.log(isSiteAllowed('https://www.abcya.com')); // true
//console.log(isSiteAllowed('https://www.google.com')); // false



chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'startPomodoro') {
    startPomodoroCycle(request.websites);
  }
});

// Set badge text when the extension is installed or Chrome starts up
chrome.runtime.onInstalled.addListener(setInitialBadgeText);
chrome.runtime.onStartup.addListener(setInitialBadgeText);
//window.open("https://my.brain.fm/focus");

function setInitialBadgeText() {

  chrome.browserAction.setBadgeText({ text: '0:00' }); // Set initial badge text
  //window.open("https://my.brain.fm/focus");

}

function startPomodoroCycle(websites) {
 // window.open("https://my.brain.fm/focus");

  saveWebsitesToStorage(websites);
  startNextPomodoro(websites);

}

function saveWebsitesToStorage(websites) {
 // window.open("https://my.brain.fm/focus");

  chrome.storage.sync.set({ websites: websites }, function () {
    console.log('Websites saved:', websites);
  });
}

function startNextPomodoro(websites) {
  // window.open("https://my.brain.fm/focus");
 
   let currentDuration;
   
   if (currentInterval % 2 === 0) {
     gamestate=1
     // Work session
     currentDuration = workDuration;
     //console.log("hi")//chrome.tabs.create({ url: /* websites[Math.floor(currentInterval / 2) - 1] || */ 'https://www.google.com' });
 
 
 ///HERE WE NEED UPDATES HERE: WHAT URL TO SEND EACH POMODORO TO????
 
 
     if (pomodoroCount === 0){
         
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: 'https://dspace.nplg.gov.ge/bitstream/1234/321657/1/Before%20and%20After%20Socrates_1968.pdf' }); //content or intensive learning training to be working well productively on advacned
     } else if (pomodoroCount === 1){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: 'https://www.youtube.com/' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
     } else if (pomodoroCount === 2){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: 'https://www.blooket.com/' }); //content or intensive learning training to be working well productively on advacned
     } else if (pomodoroCount === 3){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: 'https://example.com/' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
     } else if (pomodoroCount === 4){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: 'https://dspace.nplg.gov.ge/bitstream/1234/321657/1/Before%20and%20After%20Socrates_1968.pdf' }); //content or intensive learning training to be working well productively on advacned
     } else if (pomodoroCount === 5){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: 'https://www.youtube.com/' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
     } else if (pomodoroCount === 6){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: 'https://www.blooket.com/' }); //content or intensive learning training to be working well productively on advacned
     } else if (pomodoroCount === 7){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: 'https://docs.google.com/document/u/0/' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
     } else if (pomodoroCount === 8){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: 'https://docs.google.com/document/u/0/' }); //content or intensive learning training to be working well productively on advacned
     } else if (pomodoroCount === 9){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
     } else if (pomodoroCount === 10){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
     } else if (pomodoroCount === 11){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
     } else if (pomodoroCount === 12){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
     } else if (pomodoroCount === 13){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
     } else if (pomodoroCount === 14){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
     } else if (pomodoroCount === 15){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
     }  else if (pomodoroCount === 16){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
     } else if (pomodoroCount === 17){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
     } else if (pomodoroCount === 18){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
     } else if (pomodoroCount === 19){
      //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
     } else if (pomodoroCount === 20){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
       } else if (pomodoroCount === 21){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
       } else if (pomodoroCount === 22){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
       } else if (pomodoroCount === 23){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
       } else if (pomodoroCount === 24){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
       }  else if (pomodoroCount === 25){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
       } else if (pomodoroCount === 26){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
       } else if (pomodoroCount === 27){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
       } else if (pomodoroCount === 28){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
       } else if (pomodoroCount === 29){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
       } else if (pomodoroCount === 30){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
       } else if (pomodoroCount === 31){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' });  //fun or problem solving or blookets or 5 media source/5 enrichment/5 passions etc
       } else if (pomodoroCount === 32){
        //blockNumber=blockNumber+1
 //allowedSites = ["www.google.com", "www.appliances.com", "www.example.com"];
     console.log("hi")//chrome.tabs.create({ url: '' }); //content or intensive learning training to be working well productively on advacned
       }
 
 
       
     } else {
       // Short break
       reloadTabs();
       gamestate=0
       currentLongCount=currentLongCount+1
       if (currentLongCount%4===0){
         currentDuration = longBreakDuration;
       } else{
         currentDuration = shortBreakDuration;
       }
       
 
 
     }
   
     timer = setInterval(function () {
       updateTimer(currentDuration);
       currentDuration--;
   
       if (currentDuration < 0) {
         clearInterval(timer);
         currentInterval++;
         if(gamestate === 0){
           pomodoroCount++; // Increment the Pomodoro count
         }
         console.log("PC",pomodoroCount)
         if (currentInterval <= intervals * 2) {
           startNextPomodoro(websites);
         } else {
           // Reset after completing all intervals
           currentInterval = 1; // Start with the first work interval
           startNextPomodoro(websites);
         }
       }
     }, 1000);
   }
   
  function updateTimer(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    chrome.action.setBadgeText({ text: `${pomodoroCount}${minutes}` }); // Set badge text
    chrome.runtime.sendMessage({ action: 'updateTimer', time: time, count: pomodoroCount }); // Send Pomodoro count
  }
  
  function reloadTabs() {
    // Get the current window
    chrome.windows.getCurrent({}, function (currentWindow) {
      // Close the current window
      chrome.windows.remove(currentWindow.id, function() {
        // Once the window is closed, open a new window with the specified URL
        chrome.windows.create({ url: 'https://docs.google.com/document/d/1E6C8GUh8fM6JB3fiOSDgzNox7oiG6iUUM3Guuz2evAU' });
      });
    });
  }
  
  


// Function to execute based on gamestate
// Define variables
let allowedList = ["*"]; // Default to allow all sites

// Function to check if a site is allowed based on the current gamestate and allowedList
function isAllowedSite(url) {
    if (gamestate === 0) {
        return allowedList.includes("*");
    } else if (gamestate === 1) {
        return allowedList.includes("*");
    }
}

// Add event listener once
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    const url = new URL(details.url);
    // Check if the current site should be allowed or blocked based on the gamestate and allowedList
    if (!isAllowedSite(url)) {
        chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("blocked.html") });
    }
});

// Function to update gamestate and allowedList
function updateGamestate(newAllowedList) {
    allowedList = newAllowedList;
}

// Execute the function based on gamestate every 1 second (for demonstration purposes)
setInterval(() => {
    // Example: Switching to gamestate 1 and allowing all sites
    if (gamestate === 1) {
        updateGamestate(["*"]);
    } else {
        updateGamestate(["*"]);
    }
}, 1000); // Change gamestate every 5 seconds (for demonstration purposes)
