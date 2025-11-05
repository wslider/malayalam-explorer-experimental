document.getElementById("infoGreetingText").addEventListener("mouseout", function() {
  this.textContent = `Learn Malayalam ... The Language of Kerala`
});

document.getElementById("infoGreetingText").addEventListener("mouseover", function() {
  this.textContent = `മലയാളം പഠിക്കൂ ... കേരളത്തിന്റെ ഭാഷ  (malayalam padikku... keralathinte bhasha)`
});






// Global variables for shared logic of Greetings
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const getGreeting = (hour24) => {
  switch (true) {
    case (hour24 >= 5 && hour24 < 12):
      return { 
        english: "Good Morning", 
        malayalam: "സുപ്രഭാതം",
        translit: "Suprabhatam"
      };
    case (hour24 >= 12 && hour24 < 17):
      return { 
        english: "Good Afternoon", 
        malayalam: "ശുഭാന്തരം",
        translit: "Shubhantharam"
      };
    case (hour24 >= 17 && hour24 < 22):
      return { 
        english: "Good Evening", 
        malayalam: "ശുഭ സന്ധ്യ",
        translit: "Shubha Sandhya"
      };
    case (hour24 >= 22 || hour24 < 5):
      return { 
        english: "Good Night", 
        malayalam: "ശുഭരാത്രി",
        translit: "Shubharathri"
      };
    default:
      return { 
        english: "Hello", 
        malayalam: "നമസ്കാരം",
        translit: "Namaskaram"
      };
  }
};

const createGreetingStr = (greeting, year, month, day, hour, minsPadded, amPm, timezoneLabel) => {
  const currentMins = parseInt(minsPadded, 10);
  const randomNum = Math.floor(Math.random()*10)+1 ; 
  if (currentMins % 2 === 0) {
    return `${greeting.english}! It is ${year} ${month} ${day} at ${hour}:${minsPadded} ${amPm}. ${timezoneLabel}`;
  } 
  else if (currentMins % 2 !== 0 && randomNum >= 5 ){
    return `${greeting.malayalam}! It is ${year} ${month} ${day} at ${hour}:${minsPadded} ${amPm}. ${timezoneLabel}`;
  }
  else {
    return `${greeting.translit}! It is ${year} ${month} ${day} at ${hour}:${minsPadded} ${amPm}. ${timezoneLabel}`;
  }
};


function updateLocalTimeGreeting() {
  const now = new Date();
  const year = now.getFullYear();
  const month = monthNames[now.getMonth()];
  const day = now.getDate().toString().padStart(2, '0');
  const hour24 = now.getHours();  // For greeting logic
  const mins = now.getMinutes().toString().padStart(2, '0');
  let hour = hour24;
  const amPm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12;  // 12-hour format

  const greeting = getGreeting(hour24);

  const fullLocalGreetingText = createGreetingStr(greeting, year, month, day, hour, mins, amPm, 'local time 📍');

  // Update the DOM element
  const localTimeGreetingText = document.getElementById('localTimeGreetingText');
  if (localTimeGreetingText) {
    localTimeGreetingText.textContent = fullLocalGreetingText;
  }
}

function updateKeralaTimeGreeting() {
  const now = new Date();
  
  // Get Kerala/IST time components
  const options = {
    timeZone: 'Asia/Kolkata', // IST (UTC+5:30) for Kerala
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  const keralaTimestamp = new Intl.DateTimeFormat('en-IN', options).formatToParts(now);
  
  // Extract parts
  const year = parseInt(keralaTimestamp.find(part => part.type === 'year').value, 10);
  const month = keralaTimestamp.find(part => part.type === 'month').value;
  const day = keralaTimestamp.find(part => part.type === 'day').value.padStart(2, '0');
  let hour12 = parseInt(keralaTimestamp.find(part => part.type === 'hour').value, 10);
  const mins = keralaTimestamp.find(part => part.type === 'minute').value;
  const amPm = keralaTimestamp.find(part => part.type === 'dayPeriod').value.toUpperCase();
  
  // Convert to 24-hour for greeting logic
  const hour24 = amPm === 'PM' && hour12 !== 12 ? hour12 + 12 : (amPm === 'AM' && hour12 === 12 ? 0 : hour12);
  
  // Adjust hour for display (already in 12-hour format)
  if (hour12 === 0) hour12 = 12;

  const greeting = getGreeting(hour24);

  const fullKeralaGreetingText = createGreetingStr(greeting, year, month, day, hour12, mins, amPm, `in Kerala 🌏`);

  // Update the DOM element (fixed typo)
  const keralaTimeGreetingText = document.getElementById('keralaTimeGreetingText');
  if (keralaTimeGreetingText) {
    keralaTimeGreetingText.textContent = fullKeralaGreetingText;
  }
}

// Initial calls
function updateGreetings() {
  updateLocalTimeGreeting();
  updateKeralaTimeGreeting();
}

updateGreetings();

// Update every second
setInterval(updateGreetings, 60000);





//add romanized script on mouseover 