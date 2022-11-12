//javascript countdown

var countDownDate = new Date("December 9, 2022 09:00:00").getTime();

//Update the count every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    
    //find the distance
    var distance = countDownDate - now;
    
    //time calculation for days, months, and hour.
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60))/ (1000*60));
    var seconds = Math.floor((distance % (1000*60))/ (1000));
    
    //output the result in the element simplycountdown
    document.getElementById("democounter").innerHTML = days + "days " + hours + "hours " + minutes + "mins " + seconds + "seconds "
})
