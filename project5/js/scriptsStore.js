"use strict";

let items = [];

const getTax = val => { // find tax and round the number
    val *= 1.06;
    return val.toFixed(2);
}
const getTotal = items => {
    let total = 0;

    for (const x of items) { // add up items
        total += x;    
    }

    $("#total").val("Your total is $" + getTax(total));  // print total
}


$(document).ready(() => {
    const PRICES = [255.99, 199.99, 299.99, 299.99];

    //establish events
    $("#register").click(processEntries);
    $("#reset_form").click(resetForm);

    $("#tankBuy").click(() => {
        let listPurchase = localStorage.Purchases || ""; //set up local storage
        items[items.length] = 255.99;

        localStorage.Purchases = listPurchase.concat("Purchase one tank for $255.99", "\n"); // concatonate purchase into storage

        $("#purchases").val(localStorage.Purchases); // print purchases
        getTotal(items);
    });
 
    $("#bcdBuy").click(() => {
        let listPurchase = localStorage.Purchases || ""; //set up local storage
        items[items.length] = 199.99;

        localStorage.Purchases = listPurchase.concat("Purchase one BCD for $199.99", "\n"); // concatonate purchase into storage

        $("#purchases").val(localStorage.Purchases); // print purchases
        getTotal(items);
    });
    $("#wetsuitBuy").click(() => {
        let listPurchase = localStorage.Purchases || ""; //set up local storage
        items[items.length] = 299.99;

        localStorage.Purchases = listPurchase.concat("Purchase one Wetsuit for $299.99", "\n"); // concatonate purchase into storage

        $("#purchases").val(localStorage.Purchases); // print purchases
        getTotal(items);
    });
    $("#regulatorBuy").click(() => {
        let listPurchase = localStorage.Purchases || ""; //set up local storage
        items[items.length] = 299.99;

        localStorage.Purchases = listPurchase.concat("Purchase one Regulator for $299.99", "\n"); // concatonate purchase into storage

        $("#purchases").val(localStorage.Purchases); // print purchases
        getTotal(items);
    });

    $("#clear_purchase").click(() => {
        localStorage.removeItem("Purchases");
        $("#purchases").val("");
        $("#total").val("");
    });

    $("#purchases").val(localStorage.Purchases); // print purchases

});


const processEntries = () => {
    // get form controls to check for validity
    const name = $("#name").val();
    const email = $("#email_address").val();
    const email2 = $("#confirm_address").val();
    const scubaLicense = $("#scubaLicense").val();

    const emailPattern = /^(\w*)@(\w*)\.(\w){3}?/; // confimation patterns

    // create variable for finding errors
    let errors = false;

    // check if user did not enter required entries
    if (name === "") {
        $("#name1").text("Please enter your name.");
        errors = true;
    } else {
        $("#name1").text("*");
    }
    if (email === "" || !emailPattern.test(email)) {
        $("#email1").text("Please enter an email address.");
        errors = true;
    } else {
        $("#email1").text("*");
    }
    if (email2 === "" || email != email2 || !emailPattern.test(email2)) {
        $("#email2").text("Please confirm your email address.");
        errors = true;
    } else {
        $("#email2").text("*");
    }
    if (scubaLicense === "") {
        $("#scuba1").text("Please enter you license number.");
        errors = true;
    } else {
        $("#scuba1").text("*");
    }



    // submit the form or notify user of errors
    if (errors === false) {  // if no error messages
        alert("Thank you for contacting us. We look forward to seeing your message.");
    } else {
        alert("Please fill in all the areas.");
    }
};

const resetForm = () => {
    $("form").reset();

    // remove error messages                
    $(".required").nodeValue = "*";

    $("#email_address").focus();
};
