"use strict";

const signUpBtn = document.getElementById("signupbtn");
const signInBtn = document.getElementById("signinbtn");
const nameInput = document.getElementById("nameinput");
const newTitle = document.getElementById("newtitle");
const hideOnSignIn = document.querySelectorAll(".hide-on-signIn");
const navbarIconContainer = document.querySelector(".navbar-icon");
const formContainer = document.querySelector(".container");
const wrapper = document.getElementById("wrapper");

// const anchorTags = document.querySelectorAll("a");

function app() {
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

  navbarIconContainer.addEventListener("click", (e) => {
    const clickedUser = e.target.closest(".user-icon");
    const cart = e.target.closest(".cart-icon");

    if (clickedUser) {
      formContainer.classList.toggle("hidden");
    } else if (cart) {
      wrapper.innerHTML = "";

      const headerEl = document.createElement("header");
      headerEl.style.backgroundColor = "red";

      headerEl.classList.add("header");
      headerEl.classList.add("header-2");
      wrapper.appendChild(headerEl);
    }
  });

  //Close Form Modal

  const btnCloseModal = document.querySelector(".close-form");

  btnCloseModal.addEventListener("click", (e) => {
    e.preventDefault();

    formContainer.classList.toggle("hidden");
  });

  //cart section
}

app();
