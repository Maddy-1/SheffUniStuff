var canvas = document.getElementById("canvas_example");
var context = canvas.getContext("2d");

context.strokeStyle = "rgb(0,0,0)";
context.lineWidth = "2";

// Diagram 1
context.fillStyle = "rgb(0,0,255)";
context.beginPath();
context.rect(5,5,90,90);
context.fill();

context.fillStyle = "rgb(0,255,0)";
context.beginPath();
context.rect(20,20,60,60);
context.fill();

context.fillStyle = "rgb(255,0 ,0)";
context.beginPath();
context.rect(35,35,30,30);
context.fill();


// Diagram 2
context.fillStyle = "rgb(200,200,200)";
context.beginPath();
context.rect(145,35,30,30);
context.fill();

context.fillStyle = "rgb(0,0,255)";
context.beginPath();
context.arc(160,20,15,0,Math.PI*2,true);
context.fill();

context.fillStyle = "rgb(0,255,0)";
context.beginPath();
context.arc(190,50,15,0,Math.PI*2,true);
context.fill();

context.fillStyle = "rgb(255,0,0)";
context.beginPath();
context.arc(160,80,15,0,Math.PI*2,true);
context.fill();

context.fillStyle = "rgb(255,255,0)";
context.beginPath();
context.arc(130,50,15,0,Math.PI*2,true);
context.fill();

context.beginPath();
context.moveTo(160,20);
context.lineTo(160,80);
context.moveTo(190,50);
context.lineTo(130,50);
context.stroke();

// Diagram 3
context.fillStyle = "rgb(0,0,255)";
context.beginPath();
context.arc(270,50,45,0,Math.PI*2,true);
context.fill();

context.fillStyle = "rgb(255,255,0)";
context.beginPath();
context.arc(270,50,10,0,Math.PI*2,true);
context.fill();

context.beginPath();
context.arc(270,20,10,0,Math.PI*2,true);
context.fill();

context.beginPath();
context.arc(270,80,10,0,Math.PI*2,true);
context.fill();

// Diagram 4
context.fillStyle = "#000"
context.beginPath();
context.arc(380,50,30,0,Math.PI*2,true);
context.fill();

context.beginPath();
context.arc(355,20,15,0,Math.PI*2,true);
context.fill();

context.beginPath();
context.arc(405,20,15,0,Math.PI*2,true);
context.fill();