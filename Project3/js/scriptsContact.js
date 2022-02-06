"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    // get form controls to check for validity
    const email = $("#email_address");
    const email2 = $("#confirm_address");
    const contact = $("#contact");
    const terms = $("#terms");


    // create array for error
    let errors = false ;


    // check if user did not enter required entries
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
    if (contact.value == "") {
        document.getElementById("contact1").textContent = "Please select a means of contact.";
        errors = true;
    } else {
        document.getElementById("contact1").textContent = "*";
    }
    if (terms.checked == false) {
        document.getElementById("terms1").textContent = "You must agree to the terms of service.";
        errors = true;
    } else {
        document.getElementById("terms1").textContent = "*";
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
    $("#email_address").focus();
});