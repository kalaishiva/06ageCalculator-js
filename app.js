/* const container;
const error; */

//user input age
let age = document.getElementById("dob");
age.addEventListener('change', calcAge);

//display user years, months and days
let displayYears = document.getElementById("years");
let displayMonths = document.getElementById("months");
let displayDays = document.getElementById("days");

//create a span inside paragraph - your age is:

let yourAge = document.createElement("span");
let agePara = document.querySelector(".desc");
agePara.append(yourAge);



function getAge() {



}

function calcAge() {
    let ageSplit = age.value.split("-");
    //console.log(ageSplit);

    let currentDate = new Date();
    //console.log(currentDate);

    //getting current year, date and months
    let getYear = currentDate.getFullYear();
    let getDate = currentDate.getDate();
    let getMonth = currentDate.getMonth();




    //(current year - our birth year)
    displayYears.innerText = getYear - ageSplit[0];
    displayMonths.innerText = getMonth - ageSplit[1];
    displayDays.innerText = getDate - ageSplit[2];


    //current age is
    let currentAge = getYear - ageSplit[0];
    agePara.append(currentAge);
    //console.log(currentAge);

}

function displayAge() {




}
getAge();