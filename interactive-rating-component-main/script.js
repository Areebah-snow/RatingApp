let mainDiv = document.querySelector(".inner-container")
let Btn = document.querySelector(".btn");
let imageDiv = document.createElement("div")
let ratingDiv =  document.createElement("div");
imageDiv = `<img src="images/illustration-thank-you.svg" alt="">`
Btn.addEventListener('click', function(){
    mainDiv.innerHTML = imageDiv
    console.log("okay")
});