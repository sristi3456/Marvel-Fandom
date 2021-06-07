var w ;
var w1;
var w2 ;
var w3 ; 
var w4 ; 
var w5 

var s1 ;
var s2;
var s3;
var s4;
var s5;
var s6;

var d1 ;
var d2;
var d3;
var d4;
var d5;
var d6;

var i1 ;
var i2;
var i3;
var i4;
var i5;
var i6;

function preload (){
// scarlet 
w = loadImage("0.jpg");
w1 = loadImage("8.jpg");
w2 = loadImage("download.jpg");
w3 = loadImage("images(1).jpg");
w4 = loadImage("images(2).jpg");
w5 = loadImage("images.jpg");

// spider
s1 = loadImage("images(3).jpg");
s2 = loadImage("pp.jpg");
s3 = loadImage("hp.jpg");
s4 = loadImage("p.jpg");
s5= loadImage("pi.jpg");
s6 = loadImage("po.jpg");

// dr strange 
d1 = loadImage("d.jpg");
d2 = loadImage("d1.jpg");
d3 = loadImage("dd.jpg");
d4 = loadImage("di.jpg");
d5= loadImage("do.jpg");
d6 = loadImage("dt.jpg");

// ironman 
i1 = loadImage("u.jpg");
i2 = loadImage("ut.jpg");
i3 = loadImage("uo.jpg");
i4 = loadImage("up.jpg");
i5= loadImage("uy.jpg");
i6 = loadImage("uj.jpg");



}

function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  drawSprites();
}