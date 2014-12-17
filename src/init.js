$(document).ready(function(){
  window.dancers = [];
  // used to determine the number of dancers currently on dance floor
  var counter = 0;

  $('.lineUpButton').on('click', function(event){
    for (var i=0; i<window.dancers.length; i++) {
      window.dancers[i].setPosition($("body").height()-250);
    }
  });
  /*$('span').mouseover(function() {
    $(this).animate({"left" : "-=50px"}, 500)
  });*/

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    // calculates dancer y coordinate
    var y = ($("body").height()-250-250*Math.random());
    // calculates dancer x coordinate
    var x = Math.max($("body").width()*Math.random()-100,100);

    var dancer = new dancerMakerFunction(y, x, Math.random() * 1000
    );

    // add coordinate properties to each dancer instance
    dancer.y = y;
    dancer.x = x;

    // add pair property to each dancer instance
    dancer.pair = null;

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    counter++;

      if (counter > 1) {
        var priorNode = window.dancers[counter - 2];
        var currentNode = window.dancers[counter - 1];

        if (priorNode.pair === null) {
          // calculates distance to move currentNode to priorNode
          var a = priorNode.x - currentNode.x;
          var b = priorNode.y - currentNode.y;

          // animates currentNode instance to priorNode instance
          $(currentNode.$node).animate({left: '+='+a+'px', top:'+='+b+'px'},5000)

          // sets a pair of instances to true
          currentNode.pair = true;
          priorNode.pair = true;
        }
      }

  }); // end of addDancer button
});
