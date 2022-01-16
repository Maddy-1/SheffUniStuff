//FNCs

function drawFilledCircle(color,x,y,r){
  context.fillStyle = color;
  context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,true);
  context.fill();
}

function getRandomColor() {
  var red = Math.round(Math.random()*255);
  var green = Math.round(Math.random()*255);
  var blue = Math.round(Math.random()*255);
  var color = "rgb("+red+","+green+","+blue+")";
  return color;
}

// Main
var canvas = document.getElementById("canvas_example");
var context = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const NUM_SHAPES = 100;
const MAX_RADIUS = 50;

for (var i = 0; i<NUM_SHAPES; ++i){
  var x = Math.random()*CANVAS_WIDTH;
  var y = Math.random()*CANVAS_HEIGHT;
  var radius = Math.random()*MAX_RADIUS;
  var color = getRandomColor();

  drawFilledCircle(color,x,y,radius);

}