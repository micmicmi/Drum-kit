
const audioMap = {
    "w": 'sounds/tom-1.mp3',
    'a': 'sounds/tom-2.mp3',
    's': 'sounds/tom-3.mp3',
    'd': 'sounds/tom-4.mp3',
    'j': 'sounds/crash.mp3',
    'k': 'sounds/kick-bass.mp3',
    'l': 'sounds/snare.mp3'   
};
  
const drums = document.querySelectorAll('.drum');
 
//Detecteing buttons press
drums.forEach(drum => {
  drum.addEventListener('click', () => {
    playSound(drum.dataset.key);
    addAnimation(drum);
  });
});

//Detecteing keaboard press
document.addEventListener('keydown', (event) => {
  const audio = document.querySelector(`.drum[data-key="${event.key}"]`);
  if (audio) {
    playSound(audio.dataset.key);
    audio.classList.add('active');
    setTimeout(() => {
      audio.classList.remove('active');
    }, 100);
    console.log(event);
  }
});

function playSound(key) {
    const audio = new Audio(audioMap[key]); // Use the global audioMap object
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
}  

//animation remove after button pressed
function addAnimation(drum) {
  drum.classList.add('active');
  setTimeout(() => {
    drum.classList.remove('active');
  }, 100);
}

// const drumButtons = document.querySelectorAll(".drum");
// drumButtons.forEach(button => {
//     button.addEventListener("click", function () {
//         var buttonInnerHTML = this.innerHTML;
//         switch (buttonInnerHTML) {
//             case "w":
//                 var tom1 = new Audio ("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;
//             case "a":
//                 var tom2 = new Audio ("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;
        
//             case "s":
//                 var tom3 = new Audio ("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;

//             case "d":
//                 var tom4 = new Audio ("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;

//             case "j":
//                 var crash = new Audio ("sounds/crash.mp3");
//                 crash.play();
//                 break;

//             case "k":
//                 var kick = new Audio ("sounds/kick-bass.mp3");
//                 kick.play();
//                 break;

//             case "l":
//                 var snare = new Audio ("sounds/snare.mp3");
//                 snare.play();
//                 break;

//             default: console.log(buttonInnerHTML);
             
//         }
//     });
// });