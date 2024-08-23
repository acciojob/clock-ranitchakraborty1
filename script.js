//your JS code here. If required.
function updateTime() {
    const timerElement = document.getElementById('timer');
    const currentDateTime = new Date();

    // Format the date and time
    const formattedTime = currentDateTime.toLocaleString();

    // Update the content of the timer element
    timerElement.textContent = formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately when the page loads
updateTime();

