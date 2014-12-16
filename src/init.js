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

    // check if dancers > 1

    if (counter -1 > 0) {
      // check if previous dancer pair is null

      if (window.dancers[0].pair === null) {
        console.log(counter);
        if (window.dancers[0].x === window.dancers[0].x) {
          console.log(counter);
          window.dancers[0].x = window.dancers[0].x - 50;
          //console.log(window.dancers[counter]);
        }
       // new instance moves toward no pair instance (which is the dancer[i -1])
         // determine coordiates of dancer[i -1] and dancer[i]
           // if d2(x) is less than d1(x1)
             // set d2(x) to d1(x + 10)
           // else
             // set reverse to true
           // same if scenario for y
       // change pair property to true for both [i and i -1]

      }
    }
    // if every dancer is paired or no other dancers exist
       // leave new dancer instance alone

    //console.log(dancer);


  });
});
