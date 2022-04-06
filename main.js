var song1 = "";
var song2 = "";
var lefthandx = 0;
var lefthandy = 0;
var righthandx = 0;
var righthandy = 0;
var scoreleftwrist  = 0;

function setup(){
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function preload(){
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}
function draw(){
image(video,0,0,600,500);
fill("red");
stroke("red");
if(scorerightwrist>0.2){
    if(rightwristy>0 && rightwristy<=500){
        document.getElementById("rasagan").innerHTML="Harry Potter theme song";
        song1.play();
        song.setVolume(1);
        song.rate(1);
    }

}
if(scoreleftwrist>0.2){
    if(leftwristy>0 && leftwristy<=500){
        document.getElementById("rasagan").innerHTML="Peter Pan";
        song2.play();
        song.setVolume(1);
        song.rate(1);
    }

}
}

function modelloaded(){
    console.log("The model is working confirmed");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("leftwristx = "+leftwristx+"leftwristy = "+leftwristy);
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("rightwristx = "+rightwristx+"rightwristy = "+rightwristy);
        scoreleftwrist  = results[0].pose.keypoints[9].score;
        console.log("score of leftwrist = "+scoreleftwrist);
        scorerightwrist  = results[0].pose.keypoints[10].score;
        console.log("score of rightwrist = "+scorerightwrist);
    }
}
