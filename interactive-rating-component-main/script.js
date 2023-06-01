let mainDiv = document.querySelector(".inner-container")
let Btn = document.querySelector(".btn");
let imageDiv = document.createElement("div")
let ratingPg =  document.createElement("p")
const bodyElements = document.querySelectorAll('body *');
let headerDiv = document.createElement('h2')
ratingPg = "You have selected 4 out of 5"
headerDiv = `<h2>Thank you</h2>`
//ratingPg.classList.add("rating-div")   
imageDiv = `<img src="images/illustration-thank-you.svg" alt="">`


Btn.addEventListener('click', function(){
    mainDiv.innerHTML = `${imageDiv}<br> ${ratingPg} <br>
     ${headerDiv}
    `
    console.log("okay")
    
});