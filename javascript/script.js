"use strict";

const signUpBtn = document.getElementById("signupbtn");
const signInBtn = document.getElementById("signinbtn");
const nameInput = document.getElementById("nameinput");
const newTitle = document.getElementById("newtitle");
const hideOnSignIn = document.querySelectorAll(".hide-on-signIn");

const updateFormUI = function (message) {
  signUpBtn.classList.toggle("active");
  signUpBtn.classList.toggle("normal");
  newTitle.textContent = `${message}`;
  signInBtn.classList.toggle("active");
  signInBtn.classList.toggle("normal");
};

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();

  hideOnSignIn.forEach((input) => {
    input.classList.add("hidden");
  });

  updateFormUI("Sign In");
});

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  hideOnSignIn.forEach((input) => {
    input.classList.remove("hidden");
  });

  updateFormUI("Sign Up");
});

const navbarIconContainer = document.querySelector(".navbar-icon");
const formContainer = document.querySelector(".container");

navbarIconContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".user-icon");

  if (!clicked) return;
  formContainer.classList.toggle("hidden");
});

//Close Form Modal

const btnCloseModal = document.querySelector(".close-form");

btnCloseModal.addEventListener("click", (e) => {
  e.preventDefault();

  formContainer.classList.toggle("hidden");
});
