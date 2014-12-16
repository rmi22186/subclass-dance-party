var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.oldStep = this.step;


  // override classname to be blink-dancer-related
  var cssStyle = 'blinky-dancer'
  this.$node = $('<span class="' + cssStyle +'"></span>');

  this.setPosition(top, left);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;


MakeBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step

  // delegating to the step function in our constructor because
  // new step function masks the code in the constructor
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

MakeBlinkyDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

/*MakeBlinkyDancer.prototype.$node = $('<span class= "blinky-dancer" ></span>');*/

// var b = new MakeBlinkyDancer(5, 5, 5);
// console.log(b.$node[0]);
