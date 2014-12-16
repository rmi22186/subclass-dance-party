// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){


  var cssStyle = 'dancer'
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="' + cssStyle +'"></span>');
  this.timeBetweenSteps = timeBetweenSteps
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  // because setTimeout's 'this' is window, we must set the
  // context of the instantiation to variable that, which
  // is then bound to the new instantiation context
  var that = this;

  setTimeout(that.step.bind(that), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function() {
  console.log(window.dancers)
};

// test code
/*var a = new MakeDancer(5, 5, 5);
console.log(a);*/
