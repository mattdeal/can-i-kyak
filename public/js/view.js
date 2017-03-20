//todo: scripts to be appended to view.html
$("#submit").on("click", function() {

    // latitude & longitude received from buttons
    var lat = -33.8670522;
    var lng = 151.1957362;

    // Calls placeDetail API after receiving place id from placeSearch
    // to get details on a specific place
    function placeDetail(id) {
      var query = "https://maps.googleapis.com/maps/api/place/details/json?placeid="+id+"&key=AIzaSyDAhGg64lKOYPK-6jEMFKqQlc2TSTHTI2M";

      $.ajax({
        url: query,
        method: "GET"
      }).done(function(response) {
        console.log(response);
        $("#text").append(JSON.stringify(response.result.reviews[0].text));
      });
    }; //end placeDetail function


    // Calls placeSearch API  with lat & lng & return place id
    // used for placeDetail
    function placeSearch(lat, lng) {
      var query = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=500&type=restaurant&keyword=cruise&key=AIzaSyDAhGg64lKOYPK-6jEMFKqQlc2TSTHTI2M";

      $.ajax({
        url: query,
        method: "GET"
      }).done(function(response) {
        var placeId = response.results[0].place_id;
        console.log(placeId);

        placeDetail(placeId);
      });
    };// end placeSearch function

    // function Call
    placeSearch(lat, lng);

  });//end on.click