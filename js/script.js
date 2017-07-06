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
        $(".post-title").Typed({
            strings: ["Welcome..."],
            typeSpeed: 30, 
            backDelay: 750,
            loop: false, 
            loopCount: false,
        });
    }, 0);