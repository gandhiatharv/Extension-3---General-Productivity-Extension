// Load checkbox states from storage and update checkboxes accordingly
chrome.storage.sync.get(['categoryStates'], function(data) {
  if (data.categoryStates) {
    Object.keys(data.categoryStates).forEach(function(category) {
      document.getElementById(category).checked = data.categoryStates[category];
    });
  }
});

// Save checkbox states to storage when a checkbox is clicked
document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    var categoryStates = {};
    document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
      categoryStates[checkbox.id] = checkbox.checked;
    });
    chrome.storage.sync.set({ 'categoryStates': categoryStates });
  });
});

let intervals = 8; // Number of Pomodoro intervals

document.getElementById('pomodoroForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let websites = [];
  for (let i = 1; i <= intervals; i++) {
    let website = document.getElementById(`website${i}`).value.trim();

    // Prepend "http://" if no protocol is provided
    if (!website.startsWith('http://') && !website.startsWith('https://')) {
      website = 'http://' + website;
    }

    websites.push(website);
  }

  chrome.runtime.sendMessage({ action: 'startPomodoro', websites: websites });

  // Play background music
  //playBackgroundMusic();

  // Open brain.fm focus page
  window.open("https://my.brain.fm/player/QYN78dJrrzs5mD_TJgBcq");
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'updateTimer') {
    updateTimer(request.time);
  }
});

function updateTimer(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to play background music
function playBackgroundMusic() {
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.play();
}
