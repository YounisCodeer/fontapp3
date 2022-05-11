function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
  }
  
  function draw() {
      background('#969A97');
  }
  
  function modelLoaded() {
      console.log('Posenet Is Initialized');
      poseNet.on('pose', gotPoses)
  }
  
  function gotPoses(results)
  {
      if(results.length > 0)
      {
          console.log(results);
      }
  }
  
  
  