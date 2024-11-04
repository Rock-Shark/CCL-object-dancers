let dancer;

//testing the sound-follower
//let sound;

/*
function preload() {
  sound=loadSound('song.mp3')
}
*/

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new Octopus_Cat(width / 2, height / 2);
}

function draw() {
  background(0);
  drawFloor()
  dancer.update();
  dancer.display();
}
/*
function mousePressed() {
  if (sound.isPlaying()==false) {
    sound.loop()
  }else{
    sound.pause()
  }
}
*/

class Octopus_Cat {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.framecount = 0
    this.amplitude = new p5.Amplitude()
    this.level = 0
  }
  update() {
    angleMode(DEGREES)
    this.framecount += 4
    this.level = this.amplitude.getLevel()
  }
  display() {
    push();
    translate(this.x, this.y);
    stroke('white')
    //checking the position of the shape
    //text(mouseX - this.x, -90, -89)
    //text(mouseY - this.y, -60, -89)

    //-----------------------------------------------------------------//
    //1st Long hair
    fill('#791313')
    this.backHair(23, 100, -24, 27, 20 * sin(this.framecount))
    fill('#c28888')
    this.backHair(23, 100, -19.5, 22.5, 20 * sin(this.framecount))

    //Body of the octopus cat
    this.body(4 + 2 * sin(this.framecount), 3 * sin(this.framecount))

    //2nd Long hair
    fill('#791313')
    this.backHair(27, 120, 27.5, 25.5, 20 * sin(this.framecount))


    //Face & fur
    push()
    rotate(14)
    fill('white')
    ellipse(0, 0, 55, 50)
    pop()
    fill('white')
    triangle(-18, -17, -33, -19, -27, -1)
    triangle(-26, -2, -40, 0, -16, 18)
    triangle(22, -4, 40, 9, 20, 14)
    triangle(20, 12, 36, 22, 6, 25)

    //Ears
    this.leftEar(3 * sin(this.framecount), 3 * sin(this.framecount))
    this.rightEar(3 * sin(this.framecount), 3 * sin(this.framecount))

    //Back hair
    stroke('#461212')
    fill('#461212')
    ellipse(14.5, -37.5, 20, 10)
    ellipse(3.5, -38.5, 15, 13)

    //tentacles (as front hair)
    push()
    rotate(6)
    this.middleHair(0, 3 * sin(this.framecount))
    this.rightHair(0, 3 * sin(this.framecount), 5 * sin(this.framecount))
    this.leftHair(0, 3 * sin(this.framecount), 5 * sin(this.framecount))
    pop()


    //Big shiny eyes
    fill('black')
    noStroke()
    circle(-12.5, -3, 20)
    circle(14.5, 2, 20)

    //highlight moving with the sound
    let a = map(this.level, 0, 1, -3, 3)
    ellipse(-3.5, 10, 3, 2)
    fill('white')
    circle(-14.5, -6 - a, 10 + a)
    circle(-13.5, 0 - a, 6 + a)
    circle(12.5, -1 - a, 10 + a)
    circle(14.5, 6 - a, 6 + a)

    //Tie
    this.tie(sin(this.framecount), 1 * sin(this.framecount), sin(this.framecount))


    this.drawReferenceShapes()

    pop();
  }

  middleHair(x, y) {
    push()
    translate(x, y)
    stroke('#791313')
    fill('#791313')
    rotate(12)
    ellipse(1.5, -22, 23, 43)
    pop()
  }

  rightHair(x, y, a) {
    push()
    translate(x, y)
    stroke('#791313')
    fill('#791313')
    rotate(-20 - a)
    ellipse(30.5, -9, 24, 50)
    pop()
  }

  leftHair(x, y, a) {
    push()
    translate(x, y)
    stroke('#791313')
    fill('#791313')
    rotate(40 + a)
    ellipse(-27.5, -8, 24, 50)
    pop()
  }

  body(x, y) {
    push()
    translate(2 + x, y)
    noStroke()
    fill('white')
    beginShape()
    vertex(-17.5, 14)
    vertex(-22.5, 49)
    vertex(13.5, 60)
    vertex(3.5, 19)
    endShape(CLOSE)
    triangle(-22.5, 49, -32.5, 55, -8.5, 52)
    triangle(-3.5, 54, 10.5, 65, 13.5, 59)
    pop()
  }

  tie(x, y, a) {
    fill('black')
    noStroke()
    push()
    translate(2 + x, 5 + y)
    rotate(4 + a)
    triangle(-1.5, 20, -12.5, 14, -12.5, 29)
    triangle(-1.5, 20, 10.5, 15, 8.5, 29)
    pop()
  }

  leftEar(x, y) {
    push()
    beginShape()
    curveVertex(12.5, -22.5)
    curveVertex(42.5 + x, -40.10 + y)
    curveVertex(32.5, 0.5)
    endShape(CLOSE)
    pop()
  }
  rightEar(x, y) {
    push()
    beginShape()
    curveVertex(-1.5, -28.5)
    curveVertex(-10.5 + x, -49.5 + y)
    curveVertex(-25.5, -12.5)
    endShape(CLOSE)
    pop()
  }

  backHair(w, l, x, y, a) {
    noStroke()
    push()
    rotate(a - 10)
    translate(x, y)
    ellipse(0, 0, w, l)
    pop()
  }


  drawReferenceShapes() {
    translate(0, 0)
    noFill();
    stroke(255, 0, 0);
    //line(-5, 0, 5, 0);
    //line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}