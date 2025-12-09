        
let darkEl = document.querySelector(".dark__mode");
let lightEl = document.querySelector(".light__mode");
let body = document.querySelector("body");

let localMode = localStorage.getItem("mode")

if(localMode) {
    toggleMode()
}

function toggleMode(mode) {
  body.classList.toggle("dark-mode");
  darkEl.classList.toggle("hidden");
  lightEl.classList.toggle("hidden");
  localStorage.setItem("mode", mode)
}

darkEl.addEventListener("click", () => toggleMode("dark"))

lightEl.addEventListener("click", () => toggleMode(''))



