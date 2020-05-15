var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay"); //winning color
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

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
      modeButtons[1].classList.remove("selected"); //we just have two buttons
      //and then apply the class when each one of the buttons is clicked 
      this.classList.add("selected");
      //see end code
      //shorten with ternary operator for if statement
      //if (condition)               then this       otherwise this     
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

//set up square listeners
function setUpSquares(){
  for (var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = (this.style.background); //code outputs a color in rgb format
      //compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        //change the New Colors button to say play again
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else{
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

//create a function to deal with resetting and getting things back to normal
function reset(){
  //pick new colors based on number of colors to show
  colors = generateRandomColors(numSquares);
  //pick a new pickedColor
  pickedColor = pickColor();
  //change colorDisplay to match picked color
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
  //make the h1 background color to go back to previously (dark grey background)
  h1.style.background = "steelBlue";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  // repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

/* if(this.textContent === "easy"){
      numSquares = 3;
    } else {
      numSquares = 6;
    } //else numSquares = x depending on whether we had supperHard or medium buttons
    //then run reset based on numSquares
    reset(); */