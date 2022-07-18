song="";
leftWristX=0;
leftWristy=0;
rightWristX=0;
rightWristy=0;

function preload()
{
    song =loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(450,200);

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modeloaded);
    poseNet.on('pose',gotposes);
}
function gotposes(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("leftwristX = " + leftWristX +" leftwristY = "+ leftWristy);
        
    }
}
function modeloaded(){
    console.log("poseNet is initialized");
}
function draw() {
    image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
