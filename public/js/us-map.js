$(document).ready(function() {

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
        .css('backgroundColor', '#af0')
        .animate({backgroundColor: '#ddd'}, 1000);

        $("#text").text(data.name);
        console.log(data);
    }
  });

});//end ready.function
