//Discription : This containes functions of future value calculator
//Author: Sudesh Pamidi

"use strict"

window.onload = function() {

    // get the control references
    const dipositAmount = document.getElementById("dipositAmount");
    const interestRate = document.getElementById("interestRate");
    const numYears = document.getElementById("numYears");
    const calculate = document.getElementById("calculate");
    const results = document.getElementById("results");
    const alert = document.getElementById("alert");
    const reset = document.getElementById("reset");
    const frmFuture = document.getElementById("frmFuture");

    //Calculate button event
    calculate.onclick = function() {
        let diposit = dipositAmount.value;
        let term = numYears.value * 12
        let apr = interestRate.value / 1200;

        if (isNaN(diposit) || isNaN(term) || isNaN(apr) || Number(diposit) < 0 || Number(term) < 0 || Number(apr) < 0) {

            alert.style.display = "block";
            alert.innerText = "One or more fields are either negative or not number(s). The input fields shoul be positive numbers.";
            return;
        }

        let futureamount = calculateFutureValue(diposit, term, apr);
        let totalearned = futureamount - diposit;

        //Displaying the results
        results.style.display = "block";
        results.innerHTML = "<strong>Future Amount:</strong> $" + futureamount.toFixed(2) +
            "<br> <strong>Interest Amount:</strong> $" + totalearned.toFixed(2);
    }

    //Principal Amount keyup event 
    dipositAmount.onkeyup = clearResults;

    //interest rate keyup event
    interestRate.onkeyup = clearResults;

    //number of years  keyup event
    numYears.onkeyup = clearResults;

    //reset button onclick event binding
    reset.onclick = clearResults;

    // handling the onsubmit event to prevent submit
    frmFuture.onsubmit = preventSubmit;

    //Clear the results
    function clearResults() {
        //results.style.display = "mone"; 
        document.getElementById("results").style.display = "none";
        document.getElementById("alert").style.display = "none";
        results.innerHTML = "";
    };

    //Preventing default behaveour of submitting
    function preventSubmit() {
        event.preventDefault();
    };
}

//This function calculate the future value of time deposit assumming the compound interest
//@parem  deposit(Number) -- The amount of the deposit 
//@parem  term(Number) -- Number of years 
//@parem  apr(Number) -- The interest rate
function calculateFutureValue(deposit, term, apr) {
    var futureamount = deposit * Math.pow((1 + apr), term);
    return futureamount;
};