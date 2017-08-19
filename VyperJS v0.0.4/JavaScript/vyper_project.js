/*
*  Written by Nathan Gordon
*  Monday August 14th, 11:09:31
*  ©2017-2018 Nathan Gordon
*/
var position;

function Setup(){
  Canvas.createCanvas(500,500);
  position = new VyVector(250,250);
}

function Draw(){
  Canvas.background(new Color(0,255,0,255));
  Shapes2D.setFill(new Color(0,0,255));
  Shapes2D.ellipse(position.x, position.y, 20);
  position.setPointingTo(0, 0);
  position.move();
}
