const timeDisplay = document.getElementById('time-display');
const dateDisplay = document.getElementById('date-display');
// Note: If you removed the 'ampm-indicator' from HTML, this line might be null.
// If it causes an error, remove the line 'const ampmIndicator = ...' and remove
// the line 'ampmIndicator.textContent = "";' inside the function.


/**
 * Converts the raw time to display strings in 24-hour format.
 */
function updateClock() {
    const now = new Date();

    // 1. Time Calculation and Formatting
    let hours = now.getHours();   // Already 0-23 (24-hour format)
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // ----------------------------------------------------------------------
    // ❌ REMOVED 12-HOUR/AM-PM LOGIC:
    // const isAm = hours < 12;
    // const ampm = isAm ? 'AM' : 'PM';
    // ampmIndicator.textContent = ampm; // This line is changed below

    // hours = hours % 12;
    // hours = hours === 0 ? 12 : hours; // Convert 0 (midnight) to 12
    // ----------------------------------------------------------------------

    // Pad with leading zero (e.g., 9 becomes 09)
    // Note: Since hours is 0-23, we simply pad it.
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Update the display string
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    // Clear the AM/PM indicator text, as it's no longer needed in 24h format
    // This assumes the ampmIndicator element still exists in HTML
    
    // 2. Date Formatting
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);

    // 3. Time Zone Display (only update once)
    // This is wrapped to avoid constantly re-calculating the timezone string on every tick
}

// Initialize and start the clock update interval
// Call immediately to avoid initial delay
updateClock(); 
// Update every 1 second (1000 milliseconds)
setInterval(updateClock, 1000);
