/* global $ */
$(document).ready(function() {
    if(window.location.pathname == '/about.html') {
        console.log("Logged on to the About page");    
    }
    
    $(".username").click(function() {
       $(this).target = "_blank";
    });
});