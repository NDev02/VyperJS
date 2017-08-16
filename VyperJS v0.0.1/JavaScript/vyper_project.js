/*
*  Written by Nathan Gordon
*  Monday August 14th, 11:09:31
*  ©2017-2018 Nathan Gordon
*/
function Setup(){
  Canvas.createCanvas(500,500);
}

function Draw(){
  Canvas.background(new Color(0,0,129,255));
	Shapes2D.fillColor = new Color(0,255,0);
  Shapes2D.rect(0,0,100,100);
	Shapes2D.fillColor = new Color(255,0,0);
	Shapes2D.rect(100,0,100,100);
}
