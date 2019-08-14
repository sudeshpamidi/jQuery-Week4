"use strict"

let categories = ["Confections", "Produce", "Meat/Poultry", "Dairy Products"];

$(document).ready(function() {


    fillDropDown($("#product"), categories);

    /** Begining of getJson */
    $.getJSON("./data/products.json", function(data) {
        let products = data.Items;

        displayData();

        $("#product").on("change", displayData);

        function searchProducts(categoryName) {
            let product = products.filter(o => o.CategoryName == categoryName)
            console.log(product);
            return product;
        };

        function displayData() {
            clearResults($("#tableProducts"))
            let results = searchProducts($("#product").val());
            addRowHeader();
            addToTable(results);
        }



    });
    /** End of getJson */



    /**
     * This is to fill the dropDown with the data in array of elements.
     * @param {*} dropdown  -- dropdown name 
     * @param {*} obj       -- javascript object
     */
    function fillDropDown(dropdown, obj) {
        //adding the option dynamically        
        obj.forEach(function(e) {
            let option = new $("<option>", { value: e, text: e })
            dropdown.append(option);
        });
    }


    function addToTable(data) {
        data.forEach(function(e) {
            let url = "<a href='details.html?productid=" + e.ProductID + "'>Details</a>";
            let markup = "<tr><td>" + e.ProductID + "</td><td>" + e.ProductName + "</td><td>" + url + "</td></tr>";
            $("#tableProducts").append(markup);
        });

    };

    function clearResults(table) {
        table.empty();
    }

    function addRowHeader() { //(table, product) {
        let markup = "<tr><th>Product #</th><th>Name</th><th>Details</th></tr>"
        $("#tableProducts").append(markup)
    }

});