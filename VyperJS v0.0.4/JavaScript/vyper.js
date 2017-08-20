/*
*  Written by Nathan Gordon
*  Monday August 14th, 10:30:02
*  ©2017-2018 Nathan Gordon
*/

var drawLoop;
var fps = 1;

function VyperCoreLaunch(){
  console.log("Made with VyperJS v0.0.3.3");
  var scripts = document.getElementsByTagName("script");
  for(var i = 0; i < scripts.length; i++){
    if(scripts[i].src.includes("/vyper_project.js")){
	  scripts[i].onload = StartLoop();
    }
  }
}

function StartLoop(){
  Setup();
  VyInput.initInput();
  drawLoop = setInterval(function(){
	  Draw();
  }, 1000/fps);
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
    	document.getElementById("canvasHolder").innerHTML = "<canvas width=\'"+this.width+"px\' height=\'"+this.height+"px\'>Your browser does not support HTML Canvas.</canvas>";
		this.context = document.getElementsByTagName("canvas")[0].getContext("2d");
  	},
	background: function(color){
		//this.clear();
		this.context.fillStyle = color.toString();
		this.context.fillRect(0, 0, this.width, this.height);
	},
	clear: function(){
		this.createCanvas(this.width, this.height);
	}, 
	randomPosition: function(){
		return (new VyVector(Math.random()*this.width,Math.random()*this.height));
	}
}

var VyTweakedMath = {
	random: function(max, min){
		var out = Math.random() * max;
		if(out < (min || 0)){
			out = ((min - out) + out) + (out * Math.random())/10;
		}
		if(out > max){
			out = max;
		}
		return out;
	}
}

var VyUtils = {
	transform: function(position){
		Canvas.context.transform(0, 0, 0, 0, position.x, position.y);
	}
}

var Shapes2D = {
	lastPosition: new VyVector(0,0),
	startedAt: new VyVector(0,0),
	rect: function(x, y, width, height){
		Canvas.context.fillRect(x, y, width, height);
	},
	line: function(startX, startY, endX, endY){
		Canvas.context.moveTo(startX, startY);
		Canvas.context.lineTo(endX, endY);
		Canvas.context.stroke();
	},
	ellipse: function(startX, startY, radius){
		Canvas.context.beginPath();
		Canvas.context.arc(startX, startY, radius, 0, 2 * Math.PI);
		Canvas.context.fill();
		Canvas.context.closePath();
	},
	text: function(text, position, drawFunction){
		if(drawFunction){
			switch(drawFunction){
				case "FILL":
					Canvas.context.fillText(text, position.x, position.y);
				break;
				case "STROKE":
					Canvas.context.strokeText(text, position.x, position.y);
				break;
			}
		}else{
			Canvas.context.fillText(text, position.x, position.y);
		}
	},
	beginShape: function(startAt, conectionType){
		if(!startAt){
			startAt = new VyVector(0,0);
		}
		this.startAt = startAt;
		Canvas.context.beginPath();
		this.lastPosition = startAt;
	},
	addVertex: function(newPoint){
		Canvas.context.moveTo(this.lastPosition.x, this.lastPosition.y);
		Canvas.context.lineTo(newPoint.x, newPoint.y);
		this.lastPosition = newPoint;
	},
	endShape: function(endFunc){
		if(endFunc){
			switch(endFunc){
				case "CLOSE":
					Canvas.context.moveTo(this.lastPosition.x, this.lastPosition.y);
					Canvas.context.lineTo(this.startAt.x, this.startAt.y);
					break;
			}
		}
		Canvas.context.closePath();
		Canvas.context.stroke();
		Canvas.context.fill();
		this.lastPosition = new VyVector(0,0);
		this.startAt = new VyVector(0,0);
	},
	setFill: function(color){
		Canvas.context.fillStyle = color.toString();
	},
	setStrokeColor: function(color){
		Canvas.context.strokeStyle = color.toString();
	},
	setFont: function(family, size){
		Canvas.context.font = (size + "px " + family);
	},
	setStrokeWidth: function(width){
		Canvas.context.lineWidth = width;
	}
}

var VyColor = {
	randomColor: function(maxes){
		if(maxes){
			var r = Math.floor(Math.random() * maxes.red);
			var g = Math.floor(Math.random() * maxes.green);
			var b = Math.floor(Math.random() * maxes.blue);
			var a = Math.floor(Math.random() * maxes.alpha);
			return new Color(r,g,b,a);	
		}else{
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			var a = Math.floor(Math.random() * 255);
			return new Color(r,g,b,a);
		}
	}
}

var VyInput = {
	keysDown: [],
	buttonsDown: [],
	mousePosition: new VyVector(0,0),
	initInput: function(){
		window.onmousedown = function(event){
			var button = event.button;
			if(event.button === 0){
				VyInput.buttonsDown.push("LEFT_CLICK");
			}
			if(event.button === 1){
				VyInput.buttonsDown.push("MIDDLE_CLICK");
			}
			if(event.button === 2){
				VyInput.buttonsDown.push("RIGHT_CLICK");
			}
		}
		window.onmouseup = function(event){
			var button = event.button;
			if(event.button === 0){
				var i = VyInput.buttonsDown.indexOf("LEFT_CLICK");
				VyInput.buttonsDown = VyInput.buttonsDown.splice(i,i);
			}
			if(event.button === 1){
				var i = VyInput.buttonsDown.indexOf("MIDDLE_CLICK");
				VyInput.buttonsDown = VyInput.buttonsDown.splice(i,i);
			}
			if(event.button === 2){
				var i = VyInput.buttonsDown.indexOf("RIGHT_CLICK");
				VyInput.buttonsDown = VyInput.buttonsDown.splice(i,i);
			}
		}
		window.onmousemove = function(event){
			VyInput.mousePosition.x = event.pageX;
			VyInput.mousePosition.y = event.pageY;
		}
		window.onkeydown = function(event){
			VyInput.keysDown.push(event.key);
		}
		window.onkeyup = function(event){
			var i = VyInput.keysDown.indexOf(event.key);
			VyInput.keysDown = VyInput.keysDown.splice(i,i);
		}
	}
}

function Color(red, green, blue, alpha){
	this.red = red;
	this.green = green;
	this.blue = blue;
	this.alpha = alpha || 255;
	this.toString = function(){
		return ("rgba("+this.red+","+this.green+","+this.blue+","+(this.alpha / 255)+")");
	}
}

var VyVectorTools = {
	randomVector: function(maxX, maxY, maxZ){
		var rx = Math.random() * Canvas.width;
		var ry = Math.random() * Canvas.height;
		var rz = Math.random() * 0;
		return new VyVector(rx, ry, rz);
	}
}

function VyVector(x, y){
	this.x = x;
	this.y = y;
	this.pointingTo = [Math.random() * Canvas.width, Math.random() * Canvas.height];
	this.magnitude = [1,1];
	this.setPointingTo = function(x,y){
		this.pointingTo = [x,y];
	}
	this.setMagnitude = function(x,y){
		this.magnitude[0] = x;
		this.magnitude[1] = y;
	}
	this.move = function(){
		if(this.pointingTo[0] < this.x){
			this.magnitude[0] = Math.abs(this.magnitude[0]) * -1;
		}
		if(this.pointingTo[1] < this.y){
			this.magnitude[1] = Math.abs(this.magnitude[1]) * -1;
		}
		if(this.pointingTo[0] > this.x){
			this.magnitude[0] = Math.abs(this.magnitude[0]) * 1;
		}
		if(this.pointingTo[1] > this.y){
			this.magnitude[1] = Math.abs(this.magnitude[1]) * 1;
		}
		if(this.pointingTo[0] === this.x){
			this.magnitude[0] = 0;
		}
		if(this.pointingTo[1] === this.y){
			this.magnitude[1] = 0;
		}
		this.x += this.magnitude[0];
		this.y += this.magnitude[1];
	}
}

window.onload = VyperCoreLaunch;