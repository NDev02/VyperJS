/*
*  Written by Nathan Gordon
*  Monday August 14th, 10:30:02
*  ©2017-2018 Nathan Gordon
*/

var drawLoop;
var fps = 60;

function VyperCoreLaunch(){
  console.log("Made with VyperJS v0.0.1");
  var scripts = document.getElementsByTagName("script");
  for(var i = 0; i < scripts.length; i++){
    if(scripts[i].src.includes("/vyper_project.js")){
      scripts[i].onload = StartLoop();
    }
  }
}

function StartLoop(){
  Setup();
  drawLoop = setInterval(Draw, 1000/fps);
}

var Canvas = {
	width: 10,
	height: 10,
	context: undefined,
	storedData:{
		background_color: undefined
	},
  createCanvas: function(width, height){
    this.width = width;
    this.height = height;
    document.getElementById("canvasHolder").innerHTML = "<canvas width=\'"+this.width+"px\' height=\'"+this.height+"px\'></canvas>";
    this.context = document.getElementsByTagName("canvas")[0].getContext("2d");
  },
	background: function(color){
		this.clear();
		this.context.fillStyle = color.toString();
		this.context.fillRect(0, 0, this.width, this.height);
	},
	clear: function(){
		this.createCanvas(this.width, this.height);
	}
}

var Shapes2D = {
	strokeWeight: 1,
	strokeColor: new Color(0,0,0),
	fillColor: new Color(0,0,0),
	rect: function(x, y, width, height){
		Canvas.context.fillStyle = this.fillColor.toString();
		Canvas.context.fillRect(x, y, width, height);
	}
}

function Color(red, green, blue, alpha){
	this.red = red;
	this.green = green;
	this.blue = blue;
	this.alpha = alpha || 255;
	this.toString = function(){
		return ("rgba("+this.red+","+this.green+","+this.blue+","+this.alpha+")");
	}
}

window.onload = VyperCoreLaunch;
