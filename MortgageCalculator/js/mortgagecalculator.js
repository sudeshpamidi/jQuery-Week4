//Discription : This containes functions of martgage calculator
//Author: Sudesh Pamidi

"use strict"

//window.onload = function() {

$(function() {


    $("#calculate").on('click', function() {

        var amount = $('#principal').val();
        var term = $('#loanLength').val();
        var apr = $('#interestRate').val();


        if (isNaN(amount) || isNaN(term) || isNaN(apr) || Number(amount) < 0 || Number(term) < 0 || Number(apr) < 0) {
            $("#alert").show();
            $("#alert").html("One or more fields are either negative or not number(s). The input fields shoul be positive numbers.");
            return;
        }

        var result = calculatePayment(amount, term, apr);
        if (isNaN(result))
            result = 0;

        let totalamount = result * term;

        result = "<strong>Monthly Payment:</strong> $" + result.toFixed(2) +
            "<br> <strong>Total Cost:</strong> $" + totalamount.toFixed(2);
        $('#results').show();
        $('#results').html(result);
        //return false;
    });

    $('input[type="text"]').on("keyup", function() {
        $('#results').hide();
    });


});

/*    
        // get the control references
        const principalamt = document.getElementById("principal");
        const interestRate = document.getElementById("interestRate");
        const loanLength = document.getElementById("loanLength");
        const calculate = document.getElementById("calculate");
        const results = document.getElementById("results");
        const alert = document.getElementById("alert");
        const reset = document.getElementById("reset");
        const frmMortgage = document.getElementById("frmMortgage");

        //Calculate button event
        calculate.onclick = function() {

            let amount = Number(principalamt.value);
            let term = loanLength.value * 12;
            let apr = interestRate.value / 1200;

            if (isNaN(amount) || isNaN(term) || isNaN(apr) || Number(amount) < 0 || Number(term) < 0 || Number(apr) < 0) {
                alert.style.display = "block";
                alert.innerText = "One or more fields are either negative or not number(s). The input fields shoul be positive numbers.";
                return;
            }

            let mPayment = calculatePayment(amount, term, apr);

            if (isNaN(mPayment))
                mPayment = 0;

            let totalamount = mPayment * term

            //Display the results
            results.style.display = "block";
            results.innerHTML = "<strong>Monthly Payment:</strong> $" + mPayment.toFixed(2) +
                "<br> <strong>Total Cost:</strong> $" + totalamount.toFixed(2);
        }

        //Principal Amount keyup event 
        principalamt.onkeyup = clearResults;

        //interest rate keyup event
        interestRate.onkeyup = clearResults;

        //number of years  keyup event
        loanLength.onkeyup = clearResults;

        //reset button onlclick
        reset.onclick = clearResults;

        //frmMortgage event to prevent on submit
        frmMortgage.onsubmit = preventSubmit;

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

};
*/

//This function calculate the mortgage value of loan amount deposit and the interest rate and term of the loan.
//@parem  amount(Number) -- The amount of the deposit 
//@parem  term(Number) -- Number of years 
//@parem  apr(Number) -- The interest rate
function calculatePayment(amount, term, apr) {
    var payment = amount * (apr * Math.pow((1 + apr), term)) / (Math.pow((1 + apr), term) - 1);
    return payment;
};