function updateTime() {
    var currentTime = new Date();

    var timeString = currentTime.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    document.getElementById("pst-time").textContent = timeString;
  }

  setInterval(updateTime, 500);
  updateTime();