"use strict";

const form = document.getElementsByTagName("form")[0];
const input = document.getElementById("iemail");
const errorIcon = document.getElementById("error");
const errorMsg = document.getElementsByTagName("span")[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if(input.value.includes("@")) {
    input.style.borderColor = "var(--desatRed)";
    errorIcon.style.display = "none";
    errorMsg.style.display = "none";
  } else {
    input.style.borderColor = "rgb(249, 100, 100)";
    errorIcon.style.display = "inline-block";
    errorMsg.style.display = "block";
  } 
});

