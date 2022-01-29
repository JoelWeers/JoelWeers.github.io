"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    //preload image
    const image = new Image();
    image.src = "../Images/Homepicture2.jpg";

    const image1 = $("#homePicture");

    // attach mouseover and mouseout events for each image
    image1.addEventListener("mouseover", () => {
        image1.src = "Images/HomePicture2.jpg";
    });
    image1.addEventListener("mouseout", () => {
        image1.src = "Images/HomePicture.jpg";
    });

});