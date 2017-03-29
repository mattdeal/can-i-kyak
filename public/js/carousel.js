
//************************* CAROUSEL SECTION **********************************
function populateGrid() {
var currentModel;
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
    	models = response;
    	tableHTML = "";
    	for (var i = 0; i < 10; i++) {

      	    	if (selection == "models") {
      	    		if (models[i].model.image != null) {
      	    			currentModel = models[i].model.image;
			    		modelId = models[i].model.id;
      	    		}
      	    	}
      	    
      	    	$("#cr" + i).attr("src", currentModel); // Refering to the 10 elements (modelImages) from the carousel in HTML.
      	    	$("#cr" + i).attr("style", "height: 400px; width: 400px");
            }
          });
   }

