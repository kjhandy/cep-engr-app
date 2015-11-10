var makeColorDancer = function(top, left, timeBetweenSteps, color) {
  MakeDancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<span class="color"></span>');
}

makeColorDancer.prototype = Object.create(MakeDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;

MakeDancer.prototype.step.call(this);

makeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    MakeDancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  }

// makeColorDancer.prototype.changeColor = function() {
//   $(this).click(function() {
//     $(this).css('background-color', 'yellow')
//   });
// }


