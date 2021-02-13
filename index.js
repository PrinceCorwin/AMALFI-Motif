let sounds = {
  a: "sounds/cymbal-crash.mp3",
  s: "sounds/tom-2.mp3",
  d: "sounds/snare.mp3",
  j: "sounds/kick-bass.mp3",
  k: "sounds/tom-3.mp3",
  l: "sounds/crash.mp3",
};

let numDrums = document.querySelectorAll(".drum");
for (let i = 0; i < numDrums.length; i++) {
  numDrums[i].addEventListener("click", function () {
    let soundKey = this.textContent;
    let audio = new Audio(sounds[soundKey]);
    audio.play();
  });
}
document.addEventListener("keydown", function (event) {
  let audio = new Audio(sounds[event.key]);
  audio.play();
});
