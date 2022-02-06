"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    // get form controls to check for validity
    const name = $("#name");
    const email = $("#email_address");
    const email2 = $("#confirm_address");
    const scubaLicense = $("#scubaLicense");



    // create array for error
    let errors = false;


    // check if user did not enter required entries
    if (name.value == "") {
        document.getElementById("name1").textContent = "Please enter your name.";
        errors = true;
    } else {
        document.getElementById("name1").textContent = "*";
    }
    if (email.value == "") {
        document.getElementById("email1").textContent = "Please enter an email address.";
        errors = true;
    } else {
        document.getElementById("email1").textContent = "*";
    }
    if (email2.value == "") {
        document.getElementById("email2").textContent = "Please confirm your email address.";
        errors = true;
    } else {
        document.getElementById("email2").textContent = "*";
    }
    if (scubaLicense.value == "") {
        document.getElementById("scuba1").textContent = "Please enter you license number.";
        errors = true;
    } else {
        document.getElementById("scuba1").textContent = "*";
    }



    // submit the form or notify user of errors
    if (errors == false) {  // if no error messages
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

document.addEventListener("DOMContentLoaded", () => { //establish event listeners
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    /* //pick a date 
     $("datepicker").datepicker({
         minDate: new Date(),
         maxDate: +45,
         showButtonPanel: true
      });
    */
    $("#email_address").focus();
});




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