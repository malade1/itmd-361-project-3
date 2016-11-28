$.noConflict();
(function($) {
  $(document).ready(function() {
    $('#uc-form').on('submit', function(e) {
      $('#loading').empty();
      $('#loading').append('Loading...');

var myIndex = 0;
carousel();

$(function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
})(jQuery);







