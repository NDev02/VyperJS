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
  for(var x = 0; x < Canvas.width; x+=Canvas.width/cols){
    for(var y = 0; y < Canvas.height; y+=Canvas.height/rows){
      Shapes2D.fillColor = VyColor.randomColor("NOALPHA");
      Shapes2D.rect(x, y, Canvas.width/cols, Canvas.height/rows);
    }
  }
}
