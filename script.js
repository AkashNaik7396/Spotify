console.log("Welcome to the Spotify");
let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    { songname:"salem-e-isgq",filepath:"songs/1.mp3",coverPath:"image.src/cover1.jpg"},
    { songname:"tera-zikr",filepath:"songs/2.mp3",coverPath:"image.src/cover2.jpg"},
    { songname:"tum hi ho",filepath:"songs/3.mp3",coverPath:"image.src/cover3.jpg"},
    { songname:"tere ishq main",filepath:"songs/4.mp3",coverPath:"image.src/cover4.jpg"},
    { songname:"maa",filepath:"songs/5.mp3",coverPath:"image.src/cover5.jpg"},
    { songname:"bapu tere karke",filepath:"songs/6.mp3",coverPath:"image.src/cover6.jpg"},
    { songname:"dhpkebaaz",filepath:"songs/7.mp3",coverPath:"image.src/cover7.jpg"},
    { songname:"mubarka ",filepath:"songs/8.mp3",coverPath:"image.src/cover8.jpg"},
    { songname:"pardesi",filepath:"songs/9.mp3",coverPath:"image.src/cover9.jpg"},
]

songItem.forEach((element ,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
});

//audioElement.play();

//handle play/pause click

masterplay.addEventListener('click',() => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');    
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play'); 

    }
    
})

audioElement.addEventListener('timeupdate',()=>{
    //console.log("timeupdate");
    //update seekbar
     progress=parseInt((audioElement.currentTime/audioElement)* 100);
   // console.log(Progress);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
        Element.classList.add('a-circle-play');
        Element.classList.remove('fa-circle-pause');    
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        if(e.target.classList.contains('fa-cicle-play')){
        makeAllPlays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('a-circle-pause');
        audioElement.src='image.src/${songindex+1}.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');        
    }else{
        e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            audioElement.currentTime = 1;
            audioElement.pause();
            masterplay.classList.add('fa-circle-play');
            masterplay.classList.remove('fa-circle-pause');
        }
    });
});


document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }else{
        songindex += 1;
    }
    audioElement.src='songs/${songindex+1}.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');   
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }else{
        songindex -= 1;
    }
    audioElement.src='songs/${songindex+1}.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');   
})


