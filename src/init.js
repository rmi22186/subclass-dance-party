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

    // var findPair = function() {
      // check if dancers > 1
      if (counter > 1) {
        // check if previous dancer pair is null
        if (window.dancers[counter - 2].pair === null) {
          // if (window.dancers[counter - 1].x < window.dancers[counter - 2].x) {                      // new instance moves toward no pair instance (which is the dancer[i -1])                                                                                           // determine coordiates of dancer[i -1] and dancer[i]
            /*console.log(window.dancers[counter-1].$node)*/
            $(window.dancers[counter-1].$node).animate({left: '250px'},1000)// if d2(x) is less than d1(x1)
            /*console.log(window.dancers[counter-1].$node)*/
            /*window.dancers[counter - 1].x = window.dancers[counter - 2].x - 100;*/                 // set d2(x) to d1(x + 10)
            window.dancers[counter - 1].pair = true;
            window.dancers[counter - 2].pair = true;
          }
         // change pair property to true for both [i and i -1]
        }
      // }
    // } // end of findPair function
    // console.log(this);
    // setTimeout(findPair(), 2000);


  }); // end of addDancer button
});
