/* global $ */
$(document).ready(function() {
    if(window.location.pathname == '/about.html') {
        alert("Click to know more about Vishal!");    
    }
    
    $(".username").click(function() {
       $(this).target = "_blank";
       window.location = $(this).find("a").attr("href");
       return false;
    });
});