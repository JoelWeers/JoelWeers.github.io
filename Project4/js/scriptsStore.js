"use strict";

$(document).ready(() => {
    const PRICES = [255.99, 199.99, 299.99, 299.99];

    //establish events
    $("#register").click(processEntries);
    $("#reset_form").click(resetForm);
    /* //pick a date 
     $("datepicker").datepicker({
         minDate: new Date(),
         maxDate: +45,
         showButtonPanel: true
      });
    */
    $("#tankBuy").click(() => {
        let listPurchase = localStorage.Purchases || ""; //set up local storage

        localStorage.Purchases = listPurchase.concat("Purchase one tank for $255.99", "\n"); // concatonate purchase into storage

        $("#purchases").val(localStorage.Purchases); // print purchases
    });

    $("#bcdBuy").click(() => {
        let listPurchase = localStorage.Purchases || ""; //set up local storage

        localStorage.Purchases = listPurchase.concat("Purchase one BCD for $199.99", "\n"); // concatonate purchase into storage

        $("#purchases").val(localStorage.Purchases); // print purchases
    });
    $("#wetsuitBuy").click(() => {
        let listPurchase = localStorage.Purchases || ""; //set up local storage

        localStorage.Purchases = listPurchase.concat("Purchase one Wetsuit for $299.99", "\n"); // concatonate purchase into storage

        $("#purchases").val(localStorage.Purchases); // print purchases
    });
    $("#regulatorBuy").click(() => {
        let listPurchase = localStorage.Purchases || ""; //set up local storage

        localStorage.Purchases = listPurchase.concat("Purchase one Regulator for $299.99", "\n"); // concatonate purchase into storage

        $("#purchases").val(localStorage.Purchases); // print purchases
    });

    $("#clear_purchase").click(() => {
        localStorage.removeItem("Purchases");
        $("#purchases").val("");
    });

});


const processEntries = () => {
    // get form controls to check for validity
    const name = $("#name").val();
    const email = $("#email_address").val();
    const email2 = $("#confirm_address").val();
    const scubaLicense = $("#scubaLicense").val();

    const emailPattern = /^(\w*)@(\w*)\.(\w){3}?/; // confimation patterns
    //const namePattern = /^(.*[a-zA-Z][^!@#$%0-9])?/

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

    // remove error messages                *************************************
    $(".required").nodeValue = "*";

    $("#email_address").focus();
};


/*
let itemTotalTemp = 0;
let itemTotal = []; 
let subTotal = 0;
let total = 0;
const PRICES = [255.99, 199.99, 299.99, 299.99];
const TAX = 1.06;

// Ask the user if they want any scuba tanks
do {
    itemTotalTemp = parseFloat(prompt("How many Scuba Tanks do you want? $255.99 each"));
    if (!isNaN(itemTotalTemp) && itemTotalTemp > 0) {
        itemTotal[0] = itemTotalTemp;
        alert("We added Scuba Tanks to your bag");
    }
} while (itemTotalTemp <= 0);

// Ask the user if they want any scuba wetsuits
do {
    itemTotalTemp = parseFloat(prompt("How many Scuba Wetsuits do you want? $199.99 each"))
    if (!isNaN(itemTotalTemp) && itemTotalTemp > 0) {
        itemTotal[1] = itemTotalTemp;
        alert("We added Scuba Wetsuits to your bag");
    }
} while (itemTotalTemp <= 0);

// Ask the user if they want any scuba BCDs
do {
    itemTotalTemp = parseFloat(prompt("How many Scuba BCDs do you want? $299.99 each"))
    if (!isNaN(itemTotalTemp) && itemTotalTemp > 0) {
        itemTotal[2] = itemTotalTemp;
        alert("We added Scuba BCDs to your bag");
    }
} while (itemTotalTemp <= 0);

//Ask the user if they want any scuba BCDs
do {
    itemTotalTemp = parseFloat(prompt("How many Scuba Regulators do you want? $299.99 each"))
    if (!isNaN(itemTotalTemp) && itemTotalTemp > 0) {
        itemTotal[3] = itemTotalTemp;
        alert("We added Scuba regulators to your bag");
    }
} while (itemTotalTemp <= 0);

//Add all of the prices together for the Items the user has requested
for (let x in itemTotal) {
    subTotal += (itemTotal[x] * PRICES[x]);
}
// calculate total with tax
total = subTotal * TAX;

//give the user the information back about what it is they had entered
document.write(`<p>Your cart includes ${itemTotal[0]} Scuba Tanks costing $${PRICES[0]}</p>`);
document.write(`<p>Your cart includes ${itemTotal[1]} Scuba Wetsuits costing $${PRICES[1]}</p>`);
document.write(`<p>Your cart includes ${itemTotal[2]} Scuba BCDs costing $${PRICES[2]}</p>`);
document.write(`<p>Your cart includes ${itemTotal[3]} Scuba Regulators costing $${PRICES[3]}</p>`);
document.write(`<p>Your subtotal is $${subTotal.toFixed(2)} With your total being $${total.toFixed(2)}</p>`);
*/