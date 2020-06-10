var numSquares = 3;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay"); //winning color
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var pass = new Audio('https://www.fesliyanstudios.com/play-mp3/2653');//large clapping sound
// var fail = new Audio('https://www.fesliyanstudios.com/play-mp3/5659'); //glass breaking
var click = new Audio('https://www.fesliyanstudios.com/play-mp3/6'); //mouse click

init();

//initialize the bord
function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

//set up mode buttons event listeners
function setUpModeButtons(){
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
    //remove the selected class from buttons just to be safe
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    modeButtons[2].classList.remove("selected");
    this.classList.add("selected");   
    // this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    if(this.textContent === "Easy"){
      numSquares = 3;
    }else if(this.textContent === "Hard"){
      numSquares = 6;
    }else{
      numSquares = 12;
    }
    reset();
    });
  }
}

//set up square listeners
function setUpSquares(){
  for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = (this.style.background);
      if(clickedColor === pickedColor){
        pass.play(), 2000;
        messageDisplay.textContent = "Yaaay!!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      }else{
        click.play();
        this.style.background = "#e8d8d5";
        messageDisplay.textContent = "Ooops...";
      }
    });
  }
}

//reset the colors
function reset(){
  //pick new colors randomly
  if(numSquares === 3){
    colors = generateRandomColors(3);
  }else if(numSquares === 6){
    colors = generateRandomColors(6);
  }else{
    colors = generateRandomColors(12);
  }
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";

  //change all colors of squares based on prior changes
  for(var i = 0; i < squares.length; i++){
    if (colors[i]) {
       squares[i].style.display = "block";
       squares[i].style.background = colors[i];
    }else {
       squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelBlue";//resets h1 color
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
