"use strict";

$(document).ready( () => {
    let newSlide = $("#slides img:first-child"); //grab next slide

    setInterval( () => {
        // removes previous slide
        $("#homePicture").fadeOut(2500,
            () => {
                if (newSlide.next().length == 0) { // if at end of slides go back to beginning
                    newSlide = $("#slides img:first-child");
                } else { // else go to next slide
                    newSlide = newSlide.next();
                }
                const nextScr = newSlide.attr("src");
                $("#homePicture").attr("src", nextScr).fadeIn(1000);// fade in new slide
            });
    },
    4000); // set interval to 4 seconds
});