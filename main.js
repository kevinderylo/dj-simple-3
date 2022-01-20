var song="";
var song2="";
leftwristX=0;
leftwristY=0;

rightwristX=0;
rightwristY=0;
function preload(){
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video, modelloaded);

    posenet.on('pose', gotposes);
}

function draw(){
    image(video, 0, 0, 600, 500);

}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(2.5);
}

function modelloaded(){
    console.log("PoseNet is Initialized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;

        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;

        console.log("Left Wrist X and Y is "+leftwristX+", "+leftwristY+". Right Wrist X and Y is "+rightwristX+", "+rightwristY+".")
        
    }
}