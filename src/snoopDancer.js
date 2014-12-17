var Snoop = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  var cssStyle = 'snoop'
  this.$node = $('<span class="' + cssStyle +'"></span>');

  this.setPosition(top, left);
};

Snoop.prototype = Object.create(MakeDancer.prototype);
Snoop.prototype.constructor = Snoop;
