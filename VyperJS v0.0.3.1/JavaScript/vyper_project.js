/*
*  Written by Nathan Gordon
*  Monday August 14th, 11:09:31
*  ©2017-2018 Nathan Gordon
*/
var rows = 5;
var cols = 5;
function Setup(){
  Canvas.createCanvas(500,500);
}

function Draw(){
  Canvas.background(new Color(0,255,0,255));
  Shapes2D.fillColor = new Color(0,0,0,255);
  Shapes2D.beginShape(new VyVector(100,100));
  Shapes2D.addVertex(new VyVector(50,100));
  Shapes2D.addVertex(new VyVector(200,0));
  Shapes2D.endShape();
}
