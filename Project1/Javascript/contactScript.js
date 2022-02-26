"use strict";

$(document).ready(() => {
    $("#contact").click(processEntries);
    $("#reset1").click(resetEntries);
});

const processEntries = () => {
    // get form controls to check for validity
    const company = $("#company").val();
    const name = $("#name").val();
    const email = $("#email").val();
    const email2 = $("#confirm").val();
    const phone = $("#phone").val();

    const emailPattern = /^(\w\D*)@(\w*)\.(\w){3}?/; // confimation patterns
    const phonePattern = /^\((\d){3}\)-(\d){3}-(\d){4}?/;

    // create variable for finding errors
    let errors = false;

    // check if user did not enter required entries
    if (name === "") {
        $("#name1").text("Please enter your name.");
        errors = true;
    } else {
        $("#name1").text("*");
    }
    if (company === "") {
        $("#company1").text("Please enter your name.");
        errors = true;
    } else {
        $("#company1").text("*");
    }
    if (email === "" || !emailPattern.test(email)) {
        $("#email1").text("Please enter an email address.");
        errors = true;
    } else {
        $("#email1").text("*");
    }
    if (email2 === "" || email != email2 || !emailPattern.test(email2)) {
        $("#confirm1").text("Please confirm your email address.");
        errors = true;
    } else {
        $("#confirm1").text("*");
    }
    if(phone !== "") {
        if(!phonePattern.test(phone)) {
            $("phone1").text("Please use (XXX)-XXX-XXXX format")
            errors = true;
        }
    }

    // submit the form or notify user of errors
    if (errors === false) {  // if no error messages
        alert("Thank you for contacting us. We look forward to seeing your message.");
    } else {
        alert("Please fill in all the areas.");
    }
};

const resetEntries = () => {
    $("#company").val("");
    $("#name").val("");
    $("#email").val("");
    $("#confirm").val("");
    $("#phone").val("");
    $("#comment").val("");

    // remove error messages                
    $(".required").nodeValue = "*";
    $("#phone1").nodeValue = "";

    $("#company").focus();
};
