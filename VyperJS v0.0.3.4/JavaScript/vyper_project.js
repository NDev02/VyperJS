/*
*  Written by Nathan Gordon
*  Monday August 14th, 11:09:31
*  ©2017-2018 Nathan Gordon
*/
var count = 1;

var decayRate = 60;


function Setup(){
  Canvas.createCanvas(window.innerWidth-25, window.innerHeight-25);
  //Canvas.background(new Color(0,255,0,255));
}

function Draw(){
  var radius = Math.random() * 50;
  Shapes2D.setFill(new Color(0,0,0,decayRate));
  Shapes2D.rect(0, 0, Canvas.width, Canvas.height);
  for(var x = 0; x < count; x++){
    Shapes2D.setFill(VyColor.randomColor(new Color(100,255,100)));
    Shapes2D.ellipse(Math.random() * Canvas.width, Math.random() * Canvas.height, radius);
  }
  Shapes2D.setFont("Sedgwick Ave Display", 80);
  if(Math.random() < 0.05){
    Shapes2D.setFill(VyColor.randomColor(new Color(0,0,100,255)));
    Shapes2D.text("VyperJS", new VyVector(13, 100), "FILL");
    Shapes2D.text("VyperJS", new VyVector(14, 100), "STROKE");
    Shapes2D.text("VyperJS", new VyVector(12, 100), "FILL");
    Shapes2D.text("VyperJS", new VyVector(10, 103), "STROKE");
    Shapes2D.setFont("Sedgwick Ave Display", 50);
    Shapes2D.text("v0.0.3.4", new VyVector(13, 215), "FILL");
    Shapes2D.text("v0.0.3.4", new VyVector(10, 217), "STROKE");
  }else{
    Shapes2D.setFill(new Color(0,200,0,255));
    Shapes2D.text("VyperJS", new VyVector(10, 100), "FILL");
    Shapes2D.text("VyperJS", new VyVector(10, 100), "STROKE");
    Shapes2D.text("VyperJS", new VyVector(15, 100), "FILL");
    Shapes2D.text("VyperJS", new VyVector(12, 103), "STROKE");
    Shapes2D.setFont("Sedgwick Ave Display", 50);
    Shapes2D.text("v0.0.3.4", new VyVector(15, 215), "FILL");
    Shapes2D.text("v0.0.3.4", new VyVector(12, 217), "STROKE");
  }
  
}
