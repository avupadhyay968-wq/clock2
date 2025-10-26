const timeDisplay = document.getElementById('time-display');
const dateDisplay = document.getElementById('date-display');
const ampmIndicator = document.getElementById('ampm-indicator');
const timezoneInfo = document.getElementById('timezone-info');

/**
 * Converts the raw time to display strings.
 */
function updateClock() {
    const now = new Date();

    // 1. Time Calculation and Formatting
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Determine AM/PM and convert to 12-hour format
    const isAm = hours < 12;
    const ampm = isAm ? 'AM' : 'PM';
    ampmIndicator.textContent = ampm;

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours; // Convert 0 (midnight) to 12

    // Pad with leading zero if needed
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    // 2. Date Formatting
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);

    // 3. Time Zone Display (only update once)
    // This is wrapped to avoid constantly re-calculating the timezone string on every tick
    if (timezoneInfo.textContent === 'Local Time Zone') {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        timezoneInfo.textContent = tz;
    }
}

// Initialize and start the clock update interval
// Call immediately to avoid initial delay
updateClock(); 
// Update every 1 second (1000 milliseconds)
setInterval(updateClock, 1000); 
