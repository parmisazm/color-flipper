const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//target the button
const btn = document.getElementById("btn");
//color span
const color = document.querySelector(".color");

// set up the event listener for click events
btn.addEventListener("click", function() {
 // how to target the body?
    // console.log(document.body);
    // use background color property and change that value
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // we use our document object, look for the body, then style property and background color
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}