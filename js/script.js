/* global $ */
$(document).ready(function() {
    $(".site-title").toggle(200);
    
    if(window.location.pathname == '/about.html') {
        alert("Click to know more about Vishal!");    
    }
    
    $(".username").click(function() {
       $(this).target = "_blank";
    });
});