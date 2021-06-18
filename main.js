img="";

function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640,520);
    canvas.hide();
}

function draw(){
    image(img,0,0,640,520);
    fill('#FF0000');
    text('Dog',45,50);
    noFill();
    stroke('#FF0000');
    rect(30,60,450,350);
    
}