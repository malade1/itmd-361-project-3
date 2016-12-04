$.noConflict();
(function($) {
  $(document).ready(function() {
    $('#form').on('submit', function(event) {
      event.preventDefault();
      var pcode = $('#pcode').val();
      // var clientKey = "js-9qZHzu2Flc59Eq5rx10JdKERovBlJp3TQ3ApyC4TOa3tA8U7aVRnFwf41RpLgtE7";
      var api = 'http://api.zippopotam.us/US/' + pcode;
      $.get(api).done(function(input, json) {
        if (input != null) {
          var city = input.[0]['place name'];
          var state = input.places[0].state;
          var lng = input.places[0].longitude;
          var lat = input.places[0].latitude;
          var latLng = new google.maps.LatLng(lat, lng);
          var options = {
            center: latLng,
            zoom: 20,
          };
          var weaURL = 'http://api.wunderground.com/api/545fdc789bb2fa90/conditions/q/' + state + '/' + city + '.json';
          $.get(weaURL, function(input, json) {
            if (input != null) {
              var temp = input.current_observation.temperature_string;
              var String2 = temp;
              $('#forecast').text(String2);
            } else {
              console.log('.error');
              var form = document.getElementById("form");
              form.reset();
            }
          })
          var String1 = 'The weather in ' + city + ' , ' + state + ' is:'
          $('#location').text(String1);
          var map = new google.maps.Map(document.getElementById('map'), options);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        } 
      }).fail(function() {
        $('.error').text('Invalid zip code!');
        //$('#form').trigger("reset"); //tried to clear the error message
      })
    })
  })
})(jQuery);