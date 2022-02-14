"use strict";

$(document).ready(() =>
    $("#accordion").accordion({
        event: "mouseover",
        heightStyle: "content",
        collapsible: true,
        active: false
    })
)






/*
// the event handler for the click event of each <a> element
const toggle = evt => {
    const linkElement = evt.currentTarget;                 // get the clicked link element
    const h2Element = linkElement.parentNode;              // get the h2 tag for the <a> tag
    const divElement = h2Element.nextElementSibling;       // get h2's sibling div

    // divElement.classList.toggle("open");
    h2Element.classList.toggle("minus"); //toggles for the images and information

    if (h2Element.attr("class") != "minus") {
        divElement.slideUp(1000);
    } else {
        divElement.slideoDown(1000, "easeOutBounce");
    }

    evt.preventDefault();   // cancel default action of the <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the <a> tags
    const linkElements = document.querySelectorAll("#faqs a");
    
    // attach event handler for each <a> tag	    
    for (let linkElement of linkElements) {
        linkElement.addEventListener("click", toggle);
    }
    // set focus on first <a> tag
    linkElements[0].focus();       
});
*/