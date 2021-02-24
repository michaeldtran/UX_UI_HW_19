$(".button1").mouseover(function(){
    $(".button1").css("background-color", "white");
    $(".button1").css("color", "#4E8098");
});
$(".button1").mouseout(function(){
    $(".button1").css("background-color", "#4E8098");
    $(".button1").css("color", "white");
    $(".button1").css("outline-color", "#4E8098");
});

$(".button2").mouseover(function(){
    $(".button2").css("background-color", "white");
    $(".button2").css("color", "#4E8098");
});
$(".button2").mouseout(function(){
    $(".button2").css("background-color", "#4E8098");
    $(".button2").css("color", "white");
    $(".button2").css("outline-color", "#4E8098");
});

$(".button3").mouseover(function(){
    $(".button3").css("background-color", "white");
    $(".button3").css("color", "#4E8098");
});
$(".button3").mouseout(function(){
    $(".button3").css("background-color", "#4E8098");
    $(".button3").css("color", "white");
    $(".button3").css("outline-color", "#4E8098");
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } 
    else {
    x.className = "topnav";
    }
}

console.log("Loaded Correctly");