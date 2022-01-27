  var audioVolume = 0.7 ;
// Function to add animation when a button in clicked
const animate = (value) => {
    const currentKey = document.querySelector(`.${value}`)
    currentKey.classList.add('clicked')
    setTimeout(() => {
        currentKey.classList.remove('clicked')
    }, 250)

}


var autoMusicID 
var autoMusicON =false;
const startAutoMusic = ()=>{
    const buttons = ["H","I","T","M","E","U","P"]
     autoMusicID=setInterval(()=>{
     const currKey =buttons[(Math.floor(Math.random()*buttons.length))]
     generateSound(currKey)
     animate(currKey)
    },200)
   
}

const autoMusicButton = document.getElementById("util-button-auto")
 autoMusicButton.addEventListener ("click" ,()=>{

    if(autoMusicON){
        clearInterval(autoMusicID)
        autoMusicON=false;
        autoMusicButton.innerText="Start Auto Music"
        autoMusicButton.classList.remove("auto-music-button")
    } else{
         startAutoMusic()
         autoMusicON =true;
           autoMusicButton.innerText="Stop Auto Music"
           autoMusicButton.classList.add("auto-music-button")
    }


 }) 



//Function to add sound path
const playMusic = (soundPath) => {
   const audio = new Audio(soundPath);
   audio.volume = audioVolume 
   audio.play();

}

// Added keypress event listener to produce sound beats on pressing defined keys
document.addEventListener("keypress", (event) => {
    const pressedButton = event.key;
    generateSound(pressedButton)
    animate(pressedButton)
})


// Function to handle volume slider 
const volSlider = document.getElementById("vol-slider")
 volSlider.oninput = (event) =>{
     audioVolume =event.target.value / 100
}

// var imgURL;
// const FetchAPI = ()=>{
  
//     fetch('https://api.unsplash.com/photos/?client_id=FmHLrWyMuoqq81sbH7SdluwTPO5ozfrKyFElP4nQt60')
//     .then(res => res.json())
//       .then(res =>{
//         imgURL = res.urls.small,
//         changeBG(imgURL)
//        })
//       .catch(error => console.log(error))

// }
// FetchAPI()

// const changeBG = (imgSource) =>{
//    let container = document.getElementsByClassName('container')[0]
//    container.style.background =  `url(${imgSource})`
// }


//THEME-1-BG =Dark Theme
const darkThemeBG = "#091921";
const darkThemeText ="#3399ff";

var currentTheme ="darkTheme"
//THEME-2-BG = Light Theme
const lightThemeBG =  "FFFBFA";
const lightThemeText = "#091921";


// Function for toggling themes
const toggleTheme = (theme)=>{
    let root =document.documentElement
    if(theme === "darkTheme"){
       root.style.setProperty('--background',darkThemeBG )
       root.style.setProperty('--text',darkThemeText )
    }else{
         root.style.setProperty('--background', lightThemeBG)
         root.style.setProperty('--text', lightThemeText )
    }
   
}
//Toggle Themes
const themeToggler =document.getElementById("util-button-theme")
themeToggler.addEventListener("click",()=>{
    themeToggler.classList.add("Change-theme-clicked")
    setTimeout(()=>{
         themeToggler.classList.remove("Change-theme-clicked")
    },200)
   if(currentTheme =="darkTheme"){
       toggleTheme("lightTheme")
       currentTheme ="lightTheme"
   }else{
        toggleTheme("darkTheme")
       currentTheme ="darkTheme"
   }
})



// Function to generate sound beats on pressing defined keys 

const generateSound = (value) => {

    switch (value) {
        case 'H' :
            playMusic("beats/beat-1.mp3");
            break;
        case 'I' :
            playMusic("beats/beat-2.mp3");
            break;
        case 'T' :
            playMusic("beats/beat-3.mp3");
            break;
        case 'M' :
            playMusic("beats/beat-4.mp3");
            break;
        case 'E' :
            playMusic("beats/beat-5.mp3");
            break;
        case 'U' :
            playMusic("beats/beat-6.mp3");
            break;
        case 'P' :
            playMusic("beats/beat-7.mp3");
            break;
        default :
         console.log("You pressed a wrong button");


    }


}

// Function to handle click event for drum buttons 
const handleDrumClickButton = (event) => {
    var innerHTML = event.target.innerHTML;
    animate(innerHTML)
    generateSound(innerHTML)
}

 // Selecting all button elements using query selector for adding click event using addEventListener method
var drumButton = document.querySelectorAll(".drum-button")
for (let i = 0; i < drumButton.length; i++) {
    drumButton[i].addEventListener("click", handleDrumClickButton)
}





