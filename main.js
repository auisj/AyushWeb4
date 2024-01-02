function preload() {
  mustache = loadImage('https://i.postimg.cc/SR0F67Mx/m.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}

function take_snapshot(){
  save('myFilterImage.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function draw() {
  image(video, 0, 0, 300, 300);
  image(mustache, mustacheX, mustacheY, 40, 40);
}

function modelLoaded() {
  console.log('PoseNet is Intialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    mustacheX = results[0].pose.nose.x;
    mustacheY = results[0].pose.nose.y;
    console.log("mustache x = "+ results[0].pose.nose.x);
    console.log("mustache y = "+ results[0].pose.nose.y);
  
  }
}

  mustacheX=0;
  mustacheY=0;


 