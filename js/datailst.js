import countries from "./date.js";

let detels = document.querySelector(".details");

let arr = window.location.search.split("=");
let id = Number(arr[arr.length - 1]);

let findArr = countries.find((item) => item.id === id);

console.log(findArr);

