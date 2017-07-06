/* global $ */
$(document).ready(function() {
    if(window.location.pathname == '/about.html') {
        alert("Click to know more about Vishal!");    
    }
    
    $(".username").click(function() {
       $(this).target = "_blank";
    });
});

// $(document).click(function() {
//         $(".site-title").toggle("slow", "linear");
//     });
    
setTimeout(function(){
        $(".element0").typed({
            strings: ["apt-get install konquer"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 0);