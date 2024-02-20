"use strict";

const signUpBtn = document.getElementById("signupbtn");
const signInBtn = document.getElementById("signinbtn");
const nameInput = document.getElementById("nameinput");
const newTitle = document.getElementById("newtitle");

signinbtn.onclick = function () {
  nameinput.style.maxHeight = "0";
  newtitle.innerHTML = "Sign In";
  signupbtn.classList.add("sign");
  signinbtn.classList.remove("sign");
};

signupbtn.onclick = function () {
  nameinput.style.maxHeight = "60px";
  newtitle.innerHTML = "Sign Up";
  signupbtn.classList.remove("sign");
  signinbtn.classList.add("sign");
};
