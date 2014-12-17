var Fred = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  var cssStyle = 'fred'
  this.$node = $('<span class="' + cssStyle +'"></span>');

  this.setPosition(top, left);

};

Fred.prototype = Object.create(MakeDancer.prototype);
Fred.prototype.constructor = Fred;
