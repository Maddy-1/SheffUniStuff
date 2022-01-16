var canvas = document.getElementById("canvas_example");
var context = canvas.getContext("2d");



context.strokeStyle = "rgb(0,0,255)";
context.lineWidth = "1";

context.beginPath();
  context.arc(100,100,50,0,Math.PI*2,true);
context.stroke();

context.fillStyle="rgb(0,255,0)";
context.beginPath();
  context.arc(200,200,50,0,Math.PI*2,true)
context.fill();


context.fillStyle="rgb(255,0,0)";
context.beginPath();
context.rect(200,100,50,50);
context.fill();
