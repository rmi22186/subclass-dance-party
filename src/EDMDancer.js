var MakeEDMDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // override classname to be fred-dancer-related
  var cssStyle = 'EDM'
  this.$node = $('<span class="' + cssStyle +'"></span>');

  this.setPosition(top, left);
};

MakeEDMDancer.prototype = Object.create(MakeDancer.prototype);
MakeEDMDancer.prototype.constructor = MakeEDMDancer;


// MakeEDMDancer.prototype.step = function(timeBetweenSteps){
//   MakeDancer.prototype.step.call(this, timeBetweenSteps);

//   this.$node.toggle();

// };

// MakeEDMDancer.prototype.setPosition = function(top, left){
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
