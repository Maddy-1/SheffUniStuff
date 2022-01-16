function drawFilledCircle(color,x,y,r){
  context.fillStyle = color;
  context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,true);
  context.fill();
}

function drawCircle(x,y,r){
  var color = getRandomColor();
  context.strokeStyle = color;
  context.beginPath();
  context.arc(x,y,r,0,Math.PI*2,true);
  context.stroke();
}

function coloredCircle(x,y,r){
  var color = getRandomColor();
  context.fillStyle = color;
  context.beginPath();
  context.arc(x,y,r,0,Math.PI*2,true);
  context.fill();
}

function speckle(x,y){
  var r = 0;
  var color = getRandomColor();
  while (r > MAX_RADIUS || r < MIN_RADIUS){r = Math.random()*MAX_RADIUS;}
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

function getMouseXY(event){
  var x = event.clientX-10; // adjust for margin/offset when possible
  var y = event.clientY-10; // Same here

  if (x <= CANVAS_WIDTH && y<= CANVAS_HEIGHT) {
    speckle(x,y);
    console.log(x,y);
  }
}



document.addEventListener("click",getMouseXY);

var canvas = document.getElementById("canvas_example");
var context = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const NUM_SHAPES = 100;
const MAX_RADIUS = 50;
const MIN_RADIUS = 10;