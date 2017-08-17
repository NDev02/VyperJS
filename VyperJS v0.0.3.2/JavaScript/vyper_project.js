/*
*  Written by Nathan Gordon
*  Monday August 14th, 11:09:31
*  ©2017-2018 Nathan Gordon
*/
var cols = 10;
var rows = 10;
function Setup(){
  Canvas.createCanvas(500,500);
  Canvas.background(new Color(0,255,0,255));
}

function Draw(){
  /*
  *This has a very low framerate; each pixel in canvas recieves a new random fill color every frame
  */
  for(var x = 0; x < Canvas.width; x++){
    for(var y = 0; y < Canvas.height; y++){
      Shapes2D.setFill(VyColor.randomColor("NOALPHA"));
      Shapes2D.rect(x, y, Canvas.width/cols, Canvas.height/rows);
    }
  }
}
