"use strict"
$(document).ready(function() {

    let urlParams = new URLSearchParams(location.search);
    let productId = urlParams.get("productid");

    $.getJSON("./data/products.json", function(data) {
        let products = data.Items;

        let product = getProductInfo(productId);
        displayData($("#tbody"), product);

        /**
         * 
         * @param {string} productId 
         */
        function getProductInfo(productId) {
            return products.filter(o => o.ProductID == productId);
        };

    });

    function displayData(tbody, data) {
        Object.keys(data[0]).forEach(function(key, i) {
            let markup = "<tr><th>" + key + "</th><td><input type='text' id='" + key + "' name='" + key + "' value='" + data[0][key] + "'> </td><tr>"
            tbody.append(markup);
        });
    };

});