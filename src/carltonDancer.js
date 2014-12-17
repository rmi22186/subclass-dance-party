var Carlton = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  var cssStyle = 'carlton'
  this.$node = $('<span class="' + cssStyle +'"></span>');

  this.setPosition(top, left);

};

Carlton.prototype = Object.create(MakeDancer.prototype);
Carlton.prototype.constructor = Carlton;

// Saved in case we utilize super class toggle function
/*Carlton.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  // delegating to the step function in our constructor because
  // new step function masks the code in the constructor
  MakeDancer.prototype.step.call(this, timeBetweenSteps);

  // something appears to be broken with how toggle currently runs
  // this.$node.toggle();
};*/
