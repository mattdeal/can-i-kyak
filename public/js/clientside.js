

// After getting first "onclick" on landing page user will reach to the map page

$(document).ready(function(){
  
// Gets an optional query string from our url 
var url = window.location.search;

// To get the click on the map,
  $(document).on("click","#map2",function(event) {

    console.log(this);
      
      if (#map2 === this.state) {
        findPlaces();
       }
      else  {
        console.log("Please, select the state you want to find kyak location!!");
      };

//function for scanning database for kyaking places
  //based on state initials from map buttons
  function findPlaces(initials) {
    window.location = ("/locations/"+ initials);
  };// end findPlaces function


  $('#map2').usmap({
    'stateStyles': {
      fill: '#025',
      "stroke-width": 1,
      'stroke' : '#036'
    },
    'stateHoverStyles': {
      fill: 'teal'
    },

    'click' : function(event, data) {
      $('#alert')
        .text('Click '+data.name+' on map 2')
        .stop()
        .css('backgroundColor', 'transparent')
        .animate({backgroundColor: '#ddd'}, 1000);

        $("#text").text(data.name);

        findPlaces(data.name);
    }
  });

// after getting click on the map this function will populate the the carousel

  $(document).on("click",".item.active > img",function(event) {

   console.log(this);

   if (.item.active === this.imgUrl) {
      populateGrid();
   }
   else {
    alert("Please, click the location image to go to the location page!!");
   };


  // Function to populate the grid.
  function populateGrid() {

  var currentLocation;
   // current model in the carousel.

  //  Using method "get" the ajax function to get asynchronised response from our /api.
    alert(queryURL);
       $.ajax({
          url: queryURL,
          method: "GET",    
  //        success: function(response) {     
       }).done(function(response) {  // Function "done" will help to callback/Load data from
       alert("Got the response from API"); 
          console.log(response); // a server using an AJAX HTTP GET request
        locations = response;
        //tableHTML = "";
        for (var i = 0; i < 6; i++) {

                if (selection == "locations") {
                  if (locations[i].location.imageUrl != null) {
                    currentLocation = locations[i].location.imageUrl;
                locationId = locations[i].location.googleId;
                  }
                }
              
                $("#cr" + i).attr("src", currentLocation); // Refering to the 6 elements (locationImages) from the carousel in HTML.
                $("#cr" + i).attr("style", "height: 350px; width: 350px");
              }
            });
     }

  });


  // If the carousel image is clicked then, 

  $(document).on('click', '#location', function(event) {
    console.log(this);

   if (#location === this.googleId) {
      selectedLocation();
   }
   else {
    alert("CIK is not able to find the location! Please, enter the next one!!");
   };

   // This get request will get the locaion data for the "user"
  // Sets a flag for whether or not we're updating a post to be false initially
   var updating = false;
  // Getting jQuery references to the locationId-- body, title, address

   var bodyInput = $("#body");
   var locationTitleInput = $("#title");
   var locationAddressInput = $("#address");
   var commentsInput = $("#comments");
   var difficultyInput = $("#difficulty");
   var rentalInput = $("#rental");

   // Function for selected location
  function selectedLocation(googleId) {
    $.get("/api/locations/" + googleId, function(data) {
      if (data)  {
        //If this location exists, prefill our "cik" with it's data
        locationTitleInput.val(data.locationTitle);
        locationAddressInput.val(data.locationAddress);
        commentsInput.val(data.comments);
        difficultyInput.val(data.difficulty);
        rentalInput.val(data.rental);
        // If we have a location with this googleId, set a flag for us to know to update the location
        // when we hit submit
        updating = true;        
      }
    })
  }
    //var value = $(this).val();
    //console.log(value);

    //window.location = ("/location/"+ value);
  });// end on.click
  //catch (e) {
  //console.log(e);
//} finally {

}

  // If "user" submits his "comments" then to "post" comments,
  // Getting jQuery references to the commentForm-- person name, comment, rating.

  var commentForm = $("#commentForm");
  var nameInput = $ ("#authorId");
  var commentInput = $ ("#comment");
  var ratingInput = $ ("#rating");

 // Adding an event listener for when the form is submitted
  $(commentForm).on("submit", function newCommentSubmit(event) {
    event.preventDefault();

    // Wont submit the post if we are missing a body or an element
    if (!nameInput.val().trim() || !commentInput.val().trim() || !ratingInput.val().trim()) {
      return;
    }

    // Constructing a newComment object to hand to the database
    var newComment = {
      name: nameInput.val().trim(),
      comment: commentInput.val().trim(),
      rating: ratingInput.val().trim()
    };

    console.log(newComment)

  // Submits a new post for the "user" 

  var comment = newComment;
  function submitComment(Comment) {
    $.post("/api/comment/", Post, function() {
      window.location.href = "/comment";
    });

  function clearForm()  {
    nameInput = "";
    commentInput = "";
    ratingInput = "";
  }
  }

if (comment == newComment) {
  console.log("New Comment!");
  clear();
}  else  {
  alert("Want to post a comment?");
    newCommentSubmit();
}

});// end ready.function

 //




 