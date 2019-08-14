"use strict"
$(document).ready(function() {


    $("#cone").click(function() {
        $("#hotFudge").prop("checked", false);
        $("#divHot").hide();
        clearResults();
    });

    $("#cup").click(function() {
        $("#divHot").show();
    });

    $("#noOfScoops").on("change", displayPrice);

    $("#hotFudge").click(displayPrice);
    $("#sprinkle").click(displayPrice);
    $("#whipCream").click(displayPrice);
    $("#reset").click(clearResults);


    function displayPrice() {
        console.log($("#noOfScoops").val());
        if ($("#noOfScoops").val() == "0") {
            $("#noOfScoops").css({
                "border-bottom": "1px solid red"
            });
            return;
        } else {
            $("#noOfScoops").toggleClass("border-bottom");
        }
        let totalPrice = calculatePrice();
        results.style.display = "block";
        results.innerHTML = "<strong>Total Cost:</strong> $" + totalPrice.toFixed(2);
    }

    //Calculate the price
    function calculatePrice() {
        let topping = 0.0;

        let hotFudge = $("#hotFudge");
        let sprinkle = $("#sprinkle");
        let whipCream = $("#whipCream");
        let noOfScoops = $("#noOfScoops");

        if (hotFudge.prop("checked")) {
            topping += parseFloat(hotFudge.val());
        }

        if (sprinkle.prop("checked")) {
            topping += parseFloat(sprinkle.val());
        }

        if (whipCream.prop("checked")) {
            topping += parseFloat(whipCream.val());
        }
        let total = parseFloat(noOfScoops.val()) + topping;
        return total;
    }
    /**
     * 
     * 
     */
    function clearResults() {
        //$("#results").html("");
        $("#results").hide();
    };

});


/*
window.onload = function() {

    const noOdScoops = document.getElementById("noOfScoops");
    const hotFudge = document.getElementById("hotFudge");
    const sprinkle = document.getElementById("sprinkle");
    const whipCream = document.getElementById("whipCream");
    //const price = document.getElementById("price");
    const reset = document.getElementById("reset");

    //price.onclick = displayPrice;
    noOdScoops.onchange = displayPrice;
    hotFudge.onclick = displayPrice;
    sprinkle.onclick = displayPrice;
    whipCream.onclick = displayPrice;
    reset.onclick = clearResults;

    function displayPrice() {
        let totalPrice = calculatePrice();
        results.style.display = "block";
        results.innerHTML = "<strong>Total Cost:</strong> $" + totalPrice.toFixed(2);

    }
    //Calculate the price
    function calculatePrice() {
        let topping = 0.0;

        if (hotFudge.checked) {
            topping += parseFloat(hotFudge.value);
        }

        if (sprinkle.checked) {
            topping += parseFloat(sprinkle.value);
        }

        if (whipCream.checked) {
            topping += parseFloat(whipCream.value);
        }
        let totoal = parseFloat(noOdScoops.value) + topping;
        return totoal;
    }
    //Clear the results
    function clearResults() {
        document.getElementById("results").style.display = "none";
        results.innerHTML = "";
    };


}
*/