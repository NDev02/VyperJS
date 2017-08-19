/*
*  Written by Nathan Gordon
*  Monday August 14th, 11:09:31
*  ©2017-2018 Nathan Gordon
*/
var position;
var radius = 3;

function Setup(){
  Canvas.createCanvas(500,500);
  position = new VyVector(250,250);
}

function Draw(){
  Canvas.background(new Color(255,255,255,50));
  var mX = radius/5;
  var mY = radius/5;
  position.setMagnitude(mX, mY);
  Shapes2D.setFill(new Color(0,0,0,255));
  Shapes2D.ellipse(position.x, position.y, radius);
  if((position.x - position.pointingTo[0]) < mX && (position.x - position.pointingTo[0]) > (-1*mX) && (position.y - position.pointingTo[1]) < mY && (position.y - position.pointingTo[1]) > (-1*mY)){
    position.setPointingTo(Canvas.randomPosition().x, Canvas.randomPosition().y);
  }
  position.move();
}
