/*
*  Written by Nathan Gordon
*  Monday August 14th, 11:09:31
*  ©2017-2018 Nathan Gordon
*/
var position;
var colors = []
var radius = 5;
var scl = 10;
var drawers = 20;

function Setup(){
  Canvas.createCanvas(500, 500);
  position = new VyVector(250,250);

}

function Draw(){
  Shapes2D.beginShape(position);
  for(var i = 0; i < Math.PI * 2; i+=0.1){
    Shapes2D.addVertex(new VyVector(i, i));
  }
  Shapes2D.endShape();
}
