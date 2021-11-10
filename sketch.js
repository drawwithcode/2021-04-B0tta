const phrase1 = "Slim Shady";
const phrase2 = "Marshall Mathers";
const words1 = phrase1.split(" ");
const words2 = phrase2.split(" ");
let buttons1;
let buttons2;
let iterator = 0;
let eminem;
let slim;

function preload() {
  eminem = loadImage("./eminem.png");
  slim = loadImage("./slimshady.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  words1.forEach((word) => {
    createElement("button", word);
  });
  buttons1 = selectAll("button");

  words2.forEach((word) => {
    createElement("button", word);
  });
  buttons2 = selectAll("button");
}

function draw() {
  buttons2.forEach((button, i) => {
    let x = noise((iterator + 400 * i) / 400) * windowWidth;
    let y = noise((iterator - 400 * i) / 400) * windowHeight;
    button.position(40000, 40000);
  });
  if (mouseIsPressed == false) {
    background(171, 49, 24);
    slimimg = image(slim, width / 2, height / 2);
    iterator++;
    buttons1.forEach((button, i) => {
      let x = noise((iterator + 400 * i) / 400) * windowWidth;
      let y = noise((iterator - 400 * i) / 400) * windowHeight;
      button.position(x, y);
    });
  } else if (mouseIsPressed == true) {
    background(167, 198, 235);
    eminemimg = image(eminem, width / 2, height / 2);
    iterator++;
    buttons2.forEach((button, i) => {
      let x = noise((iterator + 400 * i) / 400) * windowWidth;
      let y = noise((iterator - 400 * i) / 400) * windowHeight;
      button.position(x, y);
    });
    buttons1.forEach((button, i) => {
      let x = noise((iterator + 400 * i) / 400) * windowWidth;
      let y = noise((iterator - 400 * i) / 400) * windowHeight;
      button.position(40000, 40000);
    });
  }

  var firstText = "Hi! My name is...";

  textAlign(CENTER);
  textSize(30);
  fill(0, 0, 0);

  text(firstText, width / 2, 100);
}
