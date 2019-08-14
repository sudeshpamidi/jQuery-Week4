//Discription : This containes functions of martgage calculator
//Author: Sudesh Pamidi

"use strict"

window.onload = function() {

    // get the control references
    const principalamt = document.getElementById("principal");
    const interestRate = document.getElementById("interestRate");
    const loanLength = document.getElementById("loanLength");
    const calculate = document.getElementById("calculate");
    const results = document.getElementById("results");
    const alert = document.getElementById("alert");
    const reset = document.getElementById("reset");
    const frmpresent = document.getElementById("frmpresent");

    //Calculate button event
    calculate.onclick = function() {

        let amount = Number(principalamt.value);
        let term = Number(loanLength.value);
        let apr = interestRate.value / 100;

        if (isNaN(amount) || isNaN(term) || isNaN(apr) || Number(amount) < 0 || Number(term) < 0 || Number(apr) < 0) {
            alert.style.display = "block";
            alert.innerText = "One or more fields are either negative or not number(s). The input fields shoul be positive numbers.";
            return;
        }

        let presentValue = calculatePayment(amount, term, apr);

        //Display the results
        results.style.display = "block";
        results.innerHTML = "<strong>Present value:</strong> $" + presentValue.toFixed(2);
    }

    //Principal Amount keyup event 
    principalamt.onkeyup = clearResults;

    //interest rate keyup event
    interestRate.onkeyup = clearResults;

    //number of years  keyup event
    loanLength.onkeyup = clearResults;

    //reset button 
    reset.onclick = clearResults;

    //form onsubmit event
    frmpresent.onsubmit = preventSubmit;

    //Clear the results
    function clearResults() {
        document.getElementById("results").style.display = "none";
        document.getElementById("alert").style.display = "none";
        results.innerHTML = "";
    };

    //Preventing default behaveour of submitting
    function preventSubmit() {
        event.preventDefault();
    };
}

//This function calculate the present value of payout and the interest rate and term of the loan.
//@parem  payout(Number) -- The amount of the payout
//@parem  term(Number) -- Number of years 
//@parem  apr(Number) -- The interest rate
function calculatePayment(payout, term, apr) {

    var factor = (apr == 0 ? term : (1 - Math.pow(1 + apr, -term)) / apr);
    var presentValue = payout * factor;

    return presentValue;
};