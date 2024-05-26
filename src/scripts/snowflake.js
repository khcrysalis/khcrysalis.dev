window.onload = function () {
    var container = document.getElementById("snowflakes");

    for (var i = 0; i < 20; i++) {
        var snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        // snowflake.style.color = "#e05757";
        snowflake.textContent = "*";
        container.appendChild(snowflake);
    }
};