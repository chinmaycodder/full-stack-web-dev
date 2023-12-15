console.log("this is my js for the spotify clone ");

// intializes the variable for the js 
let songIndex =0;
let audioElement =new Audio('1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar =document.getElementById('myprogressbar');
let gif= document.getElementById('gif');
let SongItems=  Array.from(document.getElementsByClassName('SongItems'));





let songs=[
   { songName:"namo namo",filePath:"1.mp3",coverPath:"namo namo.jpeg"},
   { songName:"blue eyes",filePath:"blue eyes.mp3",coverPath:"yo yo.jpeg"},
   { songName:"namo namo",filePath:"namo namo.mp3",coverPath:"namo namo.jpeg"},
   { songName:"namo namo",filePath:"namo namo.mp3",coverPath:"namo namo.jpeg"},
   { songName:"namo namo",filePath:"namo namo.mp3",coverPath:"namo namo.jpeg"},
]
 
    
   SongItems.forEach((Element ,i)=>{
    console.log(Element,i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath
    Element.getElementsByClassName("songlistplay")[0].innerText = songs[i].songlistplay;
   })







// handle play / pause click button 

masterplay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;


    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    
})


// listen to events 


audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    // update seek bar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log('progress');
    myprogressbar.value=progress;
})
myprogressbar,addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
})
