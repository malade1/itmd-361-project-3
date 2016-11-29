/**
 * On DOMReady initialize page functionality
 */
$(document).ready(function(){

    // Test we load this file
    alert("READY!");

    //Add functionality into the menu buttons
    prepareMenu();

function prepareMenu()
{
    $("#menu li").click(
        function () {
            $("#menu li").each(
                function(){
                    $(this).removeClass("active");
                }
            );
            $(this).addClass("active");
            HideFiles($(this).children().html());
        return false;
    });
    //Select the first as default
    $("#menu li:first").click();

function carousel() {
  var myIndex = 0;
  carousel();
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2),
    zoom: 5
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
});
};
};






