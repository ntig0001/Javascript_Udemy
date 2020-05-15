var toDoList = [];

var todo = "sing along";

 runToDo();

 function runToDo(){

  while(todo !== "quit"){
    todo = prompt("what would like to do?");
    if (todo === "new"){
      todo = prompt("Enter new todo");
      toDoList.push(todo);
      alert("Todo add successful");
    } else if(todo === "list") {
        toDoList.forEach(function (myFunc , i){
          console.log(i + ":" + myFunc);
          console.log("***********************");
        });
    } else if(todo ==="delete") {
      var index = prompt("Enter number of todo to delete");
      toDoList.splice(index, 1);
      alert("Deletion Successful");
    } else if (todo ==="quit") {
      alert("Quit Successful");
    }
  }
}

//**** Ways to select one element in javascript using the DOM */

// document.querySelector ("#first");
// document.querySelector (".special");
// document.querySelectorAll(".special") [0];
// document.querySelector("p");
// document.querySelectorAll("p") [0];
// document.querySelector("h1 + p");
// document.getElementById("first");
// document.getElementsByClassName(".special") [0];
// document.getElementsByTagName("p") [0];


var bClick = document.querySelector("button");

// bClick.addEventListener ("click", function(){
//    // this.classList.toggle(".pinking");

// var isPurple = false;
// if (isPurple){
//   document.body.style.background = "white";
//   //isPurple = false;
// } else {
//   document.body.style.background = "purple";
//   //isPurple = true;
// }
//   isPurple = !isPurple;

// });

bClick.addEventListener ("click", function(){
   document.body.classList.toggle("pinking");
});



