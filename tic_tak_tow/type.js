console.log("welcome to tic tak toe")
let music=new Audio("tic_tak_tow/fun.mp3");
let AudioTurn=new Audio("tic_tak_tow/turn.wav");
let gameover =new Audio("tic_tak_tow/gameover.wav");
let audioturn ='X';


//function to change turn 
const changeturn=()=>{
    return turn=="x"?"0":"x"

}

// function to check for win
const checkwin= ()=>{

}


//game logic
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
 
    let boxtext= document.querySelector('.boxtext');
    boxtext.addEventListener('click', ()=>{
        if (e.innertext ===  '  '){
            e.innertext = turn;
            changeturn();
            AudioTurn.play();
            checkwin();
            document.getElementsByClassName(turn)[0].innertext ="turn for" + turn;

        }
    })
});