var countDownDate = new Date("Dec 10, 2022 21:01:05").getTime();
var x = setInterval(function() {
    
    var now = new Date().getTime();

    var distance = countDownDate - now;

    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance ) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = hours + " : " + minutes + " : " + seconds ;

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED"
    }
}, 1000);