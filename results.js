var cuisine = sessionStorage.getItem("cuisine");
var diet = sessionStorage.getItem("diet"); 
let latitude = sessionStorage.getItem("latitude");
let longitude = sessionStorage.getItem("longitude");

// let radius = document.getElementById("myRange");
// radius.value = sessionStorage.getItem("sliderValue") || 15;

// radius.oninput = function() {
//     // Store the current value of the slider in sessionStorage
//     sessionStorage.setItem("sliderValue", this.value);
// }


console.log(cuisine + ", " + diet + ", " + " lat: " + latitude + " long: " + longitude);
document.getElementById("resultOut").innerHTML = "You chose " + cuisine + " food with a " + diet + " diet.";
document.getElementById("userCoords").innerHTML = "lat: " + latitude + " long: " + longitude;

var slider = document.getElementById("myRange");
var output = document.getElementById("miles");

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value + " miles";
// }
