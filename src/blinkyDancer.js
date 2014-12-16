var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // doesn't look like we need this for step
  /*this.oldStep = this.step;*/

  // override classname to be blink-dancer-related
  var cssStyle = 'Blinky'
  this.$node = $('<span class="' + cssStyle +'"></span>');

  this.setPosition(top, left);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;


MakeBlinkyDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  // delegating to the step function in our constructor because
  // new step function masks the code in the constructor
  MakeDancer.prototype.step.call(this, timeBetweenSteps);

  // something appears to be broken with how toggle currently runs
  this.$node.toggle();
};

MakeBlinkyDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// var b = new MakeBlinkyDancer(5, 5, 5);
// console.log(b.$node[0]);
