

const audioMap = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/crash.mp3",
  k: "sounds/kick-bass.mp3",
  l: "sounds/snare.mp3",
};

const drums = document.querySelectorAll(".drum");

function playSoundAndAnimate(key) {
  const audio = new Audio(audioMap[key]);
  audio.play().catch((error) => console.error("Error playing audio:", error));

  const drumElement = document.querySelector(`.drum[data-key="${key}"]`);
  if (drumElement) {
    drumElement.classList.add("active");
    setTimeout(() => {
      drumElement.classList.remove("active");
    }, 100);
  }
}

drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    playSoundAndAnimate(drum.dataset.key);
  });
});

document.addEventListener("keydown", (event) => {
  playSoundAndAnimate(event.key);
});
