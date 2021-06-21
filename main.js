img="";
status="";

function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640,520);
    canvas.hide();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML='Status: object detecting';
}
function modelLoaded(){
console.log('cocossd is initialized');
status=true;
objectDetector.detect(img,gotResult);
}
function draw(){
    image(img,0,0,640,520);
    fill('#FF0000');
    text('Dog',45,50);
    noFill();
    stroke('#FF0000');
    rect(30,60,450,350);

    fill(' #0000FF ');
    text('Cat',45,50);
    noFill();
    stroke(' #0000FF ');
    rect(300,90,270,320);
    
}

function gotResult(error,results){
if(results){
console.log('results');
}
if(error){
    console.log('error');
}
}