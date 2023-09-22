function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hrsElement = document.getElementById("hrs");
    const minElement = document.getElementById("min");
    const secElement = document.getElementById("sec");

    hrsElement.textContent = (hours < 10 ? "0" : "") + hours;
    minElement.textContent = (minutes < 10 ? "0" : "") + minutes;
    secElement.textContent = (seconds < 10 ? "0" : "") + seconds;

    requestAnimationFrame(updateClock);
}

// Initial update and start the clock
updateClock();