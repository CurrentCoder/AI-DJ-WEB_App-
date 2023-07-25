song ="";

function preload()
{
    song = loadSound("music.mp3");
}

function setUp()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    Video = createCapture(VIDEO);
    Video.hide();
}

function draw()
{
  image(VIDEO, 0, 0,600 ,500);
}

function play()
{
    song.play();
}
