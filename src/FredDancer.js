var MakeFredDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // override classname to be fred-dancer-related
  var cssStyle = 'Fred'
  this.$node = $('<span class="' + cssStyle +'"></span>');

  this.setPosition(top, left);

};

MakeFredDancer.prototype = Object.create(MakeDancer.prototype);
MakeFredDancer.prototype.constructor = MakeFredDancer;


/*MakeFredDancer.prototype.step = function(timeBetweenSteps){
  MakeDancer.prototype.step.call(this, timeBetweenSteps);

};*/

// MakeFredDancer.prototype.setPosition = function(top, left){
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);

// };

// var b = new MakeBlinkyDancer(5, 5, 5);
// console.log(b.$node[0]);