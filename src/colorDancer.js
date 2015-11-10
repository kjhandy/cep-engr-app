var makeColorDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps)
  // this.$node = $('<div class="dancer"></div>');
  this.$node = $('<div class="color"><img src ="img/cat1.jpg" /></div>');
  this.$node.draggable();
  // this.$node.mouseover(function() {
  //   this.$node.css('height', '400px');
  // });
this.$node.mouseover(function() {
  $(this).animate({height: '+=100px'}, 1000)
});
this.$node.mouseover(function() {
  $(this).css({background: 'blue'});
});
this.$node.mouseout(function() {
  $(this).animate({height: '-=100px'}, 1000)
});
this.$node.mouseout(function() {
  $(this).css({background: 'red'}, 1000)
});

}

makeColorDancer.prototype = Object.create(MakeDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;

// MakeDancer.prototype.step.call(this);

// makeColorDancer.lineUp = function() {
//   $('document').click(function() {
//     left = 50px;
//   })
// }

// makeColorDancer.prototype.lineup = function() {
//   $('documet').click(function() {
//     left = 50px;
//   }
// }

$('body').click(function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  this.$node.css({top: mouseX, left: mouseY});
  });


