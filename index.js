"use strict";

const all = document.querySelectorAll(".for");
let first = document.getElementById("fn");
let second = document.getElementById("ln");
let third = document.getElementById("ea");
let fourth = document.getElementById("password");

let fn = first.value;
let ln = second.value;
let ea = third.value;
let password = fourth.value;

document.querySelector("button").addEventListener("click", function () {
  for (let i = 0; i < all.length; i++) {
    const al = all[i].textContent;
    if (al === "") {
      //first
      first.style.border = "2px solid red";

      //second
      second.style.border = "2px solid red";

      //third
      third.style.border = "2px solid red";

      //fourth
      fourth.style.border = "2px solid red";

      document.querySelector(".hidden").classList.toggle("hidden");
      document.querySelector(".span").classList.add("span");
      first.setAttribute("placeholder", " ");
      second.setAttribute("placeholder", " ");
      third.setAttribute("placeholder", " ");
      fourth.setAttribute("placeholder", " ");
    } else {
      first.style.border = "2px solid red";

      //second
      second.style.border = "2px solid red";

      //third
      third.style.border = "2px solid red";

      //fourth
      fourth.style.border = "2px solid red";

      document.querySelector(".hidden").classList.toggle("hidden");
      document.querySelector(".span").classList.add("span");
      first.setAttribute("placeholder", " ");
      second.setAttribute("placeholder", " ");
      third.setAttribute("placeholder", " ");
      fourth.setAttribute("placeholder", " ");
    }
    const icon = document.querySelectorAll("input");
    for (let i = 0; i < icon.length; i++) {
      const ic = icon[i];
      ic.classList.add("icon");
    }
  }
});
