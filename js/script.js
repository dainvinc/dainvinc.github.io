/* global $ */
$(document).ready(function() {
    if(window.location.pathname == '/about.html') {
        alert("Click to know more about Vishal!");    
    }
    
    $(".username").click(function() {
       //$(this).target = "_blank";
       var link = $(this).find("a");
       link.attr("target", "_blank");
       window.open(link.attr("href"));
       return false;
    });
});