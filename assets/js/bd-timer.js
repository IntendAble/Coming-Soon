var targetDate = new Date('January 16, 2024 09:00:00').getTime();

// Calculate the time difference in milliseconds
var timeDifference = targetDate - new Date().getTime();

// Add the time difference to the current date and time
var endDate = new Date().getTime() + timeDifference;

var x = setInterval(function() {

    var now =  new Date().getTime();

    var timeRemaining = endDate - now;

    var daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / (1000));

    document.getElementById("days").innerHTML = daysRemaining;
    document.getElementById("hours").innerHTML = hoursRemaining;
    document.getElementById("minutes").innerHTML = minutesRemaining;
    document.getElementById("seconds").innerHTML = secondsRemaining; 

    if (timeRemaining < 0) { 
        clearInterval(x);
		document.getElementById("days").innerHTML ='0'; 
		document.getElementById("hours").innerHTML ='0'; 
		document.getElementById("minutes").innerHTML ='0' ; 
        document.getElementById("seconds").innerHTML = '0';
        alert("Thank you for your patience");
    }

},1000);
