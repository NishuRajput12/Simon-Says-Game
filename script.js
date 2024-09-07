// Initialize the game variables
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

// Print "game started" to the console when a key is pressed
document.addEventListener("keypress", function() {
    if (!started) {
        console.log("game started");
        started = true;
        level = 0;
        gameSeq = [];
        // Call function to start the game sequence
        nextSequence();
    }
});

// Dummy function for demonstration purposes
function nextSequence() {
    console.log("Next sequence function called");
}

















// let gameSeq=[];
// let userSeq=[];
// let=["skyblue","blue","orange","pink"];

// let started=false;
// let level=0;
// let h2=document.querySelector("h2");
// document.addEventListener("keypress", function(){
  // if(started== false){
  //   console.log("game started");
  // });


//   started=true;
// levelUp();

//   }

// function btnFlash(btn){
//   btn.classList.add("flash");
//   setTimeout(function(){
//     btn.classList.remove("flash");
//   } ,1000);
// }
// function levelUp(){
//   level++;
//   h2.innerText=`Level ${level}`;

//   let randIdx= Math.floor(Math.random()*3);
//   let randColor=btn(randIdx);
//   let ranBtn=documement.querySelector(`.${randColor}`);
//   //random btn choose
//   console.log(randIdx)
//   console.log(randColor);
// console.log(ranBtn);
//   btnFlash(randBtn);
//   }




