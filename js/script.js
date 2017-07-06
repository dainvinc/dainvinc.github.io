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
    
$(function() {
    $(".site-title").typed({strings: ["First sentence", "Second"], typeSpeed: 0});
})