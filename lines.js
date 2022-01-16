var canvas = document.getElementById("canvas_example");
var context = canvas.getContext("2d");



//cross boxes

  context.strokeStyle = "rgb(0,0,255)";
  context.lineWidth = "1";
  context.beginPath();

  context.moveTo(0,0);
  context.lineTo(100,0);
  context.lineTo(100,100);
  context.lineTo(0,100);
  context.lineTo(0,0);
  context.stroke();

  context.strokeStyle="rgb(0,255,0)";
  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(100,100);
  context.moveTo(100,0);
  context.lineTo(0,100)

  context.stroke();


// closePath

  context.strokeStyle = "rgb(0,0,255)";
  context.lineWidth = "1";

  context.beginPath();
  context.moveTo(50,0);
  context.lineTo(150,100);
  context.lineTo(200,100);
  console.log(context.strokeStyle);
  context.closePath();
  context.stroke();




    
