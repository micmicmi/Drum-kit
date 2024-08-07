
//  VERSION CODE 1 :
// const starContainer = document.querySelector('.star-container');
// const maxStars = 0;

// document.addEventListener('mousemove', (event) => {
//   const star = document.createElement('div');
//   star.classList.add('star');

//   star.style.left = event.clientX + 'px';
//   star.style.top = event.clientY + 'px';   

//   starContainer.appendChild(star);
// });


// const audioMap = {
//   w: "sounds/tom-1.mp3",
//   a: "sounds/tom-2.mp3",
//   s: "sounds/tom-3.mp3",
//   d: "sounds/tom-4.mp3",
//   j: "sounds/crash.mp3",
//   k: "sounds/kick-bass.mp3",
//   l: "sounds/snare.mp3",
// };

// const drums = document.querySelectorAll(".drum");

// function playSoundAndAnimate(key) {
//   const audio = new Audio(audioMap[key]);
//   audio.play().catch((error) => console.error("Error playing audio:", error));

//   const drumElement = document.querySelector(`.drum[data-key="${key}"]`);
//   if (drumElement) {
//     drumElement.classList.add("active");
//     setTimeout(() => {
//       drumElement.classList.remove("active");
//     }, 100);
//   }
// }

// drums.forEach((drum) => {
//   drum.addEventListener("click", () => {
//     playSoundAndAnimate(drum.dataset.key);
//   });
// });

// document.addEventListener("keydown",(event) => {
//   playSoundAndAnimate(event.key);
// });



//  VERSION CODE 2:
const starContainer = document.querySelector('.star-container');
const maxStars = 0;

document.addEventListener('mousemove', (event) => {
  const star = document.createElement('div');
  star.classList.add('star');

  star.style.left = event.clientX + 'px';
  star.style.top = event.clientY + 'px';   

  starContainer.appendChild(star);
});


const audioMap = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/crash.mp3",
  k: "sounds/kick-bass.mp3",
  l: "sounds/snare.mp3",
};

const drums = document.querySelectorAll(`.drum`);

function playSoundAndAnimate(key) {
  const audio = new Audio(audioMap[key]);
  audio.play().catch((error) => console.error("Error playing audio:", error));

  const drumElement = document.querySelector(`.drum[data-key="${key}"]`);
  if (drumElement) {
    drumElement.classList.add(`active`);
    setTimeout(() => {
      drumElement.classList.remove(`active`);
    }, 100);
  }
}

function playSound(key){
  const audio = new Audio(audioMap[key]);
  audio.play().catch((error) => console.error("Error playing audio:", error));
}

function minimizeDrum(key){
  const drumElement = document.querySelector(`.drum[data-key="${key}"]`);

  if (drumElement) {
    drumElement.classList.add(`active`);
  }
}

function maximizeDrum(key){
  const drumElement = document.querySelector(`.drum[data-key="${key}"]`);

  if (drumElement) {
    drumElement.classList.remove(`active`);
  }
}

drums.forEach((drum) => {
  drum.addEventListener("mousedown", () => {
    minimizeDrum(drum.dataset.key);
  });
});

drums.forEach((drum) => {
  drum.addEventListener("mouseup", () => {
    playSound(drum.dataset.key);
    maximizeDrum(drum.dataset.key);
  });
});

document.addEventListener("keydown", (event) => {
  playSoundAndAnimate(event.key);
});


