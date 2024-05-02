function updateClock() {
    var now = new Date();

    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds;

    var day = now.getDate().toString().padStart(2, '0');
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var year = now.getFullYear();

    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = daysOfWeek[now.getDay()];

    var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthOfYear = monthsOfYear[now.getMonth()];

    var dateString = dayOfWeek + ', ' + day + ' ' + monthOfYear + ' ' + year;

    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}
setInterval(updateClock, 1000);
updateClock();
