/*
*  Written by Nathan Gordon
*  Monday August 14th, 11:09:31
*  ©2017-2018 Nathan Gordon
*/
var x = 250;
var y = 250;
var speed = 10;

var rows = 10;
var cols = 10;

function Setup(){
  Canvas.createCanvas(500,500);
  //Canvas.background(new Color(0,255,0,255));
}

function Draw(){
  var m = Math.floor(Math.random() * 4);
  switch(m){
    case 0:
      x += speed;
    break;
    case 1:
      x -= speed;
    break;
    case 2:
      y += speed;
    break;
    case 3:
      y -= speed;
    break;
  }
  if(x < 0){
    x = Canvas.width;
  }
  if(x > Canvas.width){
    x = 0;
  }
  if(y < 0){
    y = Canvas.height;
  }
  if(y > Canvas.height){
    y = 0;
  }
  var radius = Math.random() * 50;
  Shapes2D.setFill(new Color(100,100,100,2));
  Shapes2D.rect(0, 0, Canvas.width, Canvas.height);
  Shapes2D.setFill(VyColor.randomColor(new Color(50,255,100,200)));
  Shapes2D.ellipse(x,y,Math.random() * 50);
  Shapes2D.setFont("Sedgwick Ave Display", 80);
  Shapes2D.setFill(VyColor.randomColor(new Color(0,0,100,255)));
  Shapes2D.text("VyperJS", new VyVector(10, 100), "FILL");
  Shapes2D.text("VyperJS", new VyVector(10, 100), "STROKE");
  Shapes2D.setFill(VyColor.randomColor(new Color(0,255,0,255)));
  Shapes2D.text("VyperJS", new VyVector(15, 100), "FILL");
  Shapes2D.text("VyperJS", new VyVector(12, 103), "STROKE");
  Shapes2D.setFont("Sedgwick Ave Display", 50);
  Shapes2D.setFill(VyColor.randomColor(new Color(0,255,0,255)));
  Shapes2D.text("v0.0.3.3", new VyVector(300, 450), "FILL");
  Shapes2D.text("v0.0.3.3", new VyVector(303, 452), "STROKE");
}
