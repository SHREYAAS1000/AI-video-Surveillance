video = ""

function  preload() {

    video=createVideo("video.mp4");
video.hide();
    
}

function setup() {
    
canvas= createCanvas(480,380);
canvas.center();

}


function draw()
{
image(video,0,0,480,380);
}

function start()
{
    object_Detector =ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = " Status : detecting objects"; 
}

function modelloaded()
{
    console.log("MOdel is loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
















