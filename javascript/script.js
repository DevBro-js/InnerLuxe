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
  const updateNavbar = function () {
    wrapper.innerHTML = "";

    const html = `
    <nav class="navbar navbar-color-2">
    <div class="navbar__col-1">
      <h1 class="navbar__heading">
        <a href="./" id="innerLuxeLogo">InnerLuxe</a>
      </h1>
    </div>

    <div class="navbar__col-2">
      <ul class="navbar__list">
        <li class="navbar__list-items">
          <a href="#" class="">SHOP NOW</a>
        </li>
        <li class="navbar__list-items">
          <a href="#" class="">COLLECTION</a>
        </li>
        <li class="navbar__list-items">
          <a href="#" class="">INSPIRATION</a>
        </li>
        <li class="navbar__list-items">
          <a href="#" class="">CONTACT</a>
        </li>
      </ul>

      <div class="navbar-icon">
        <a href="#"><i class="ri-search-2-line"></i></a>
        <a href="#cart"
          ><i class="ri-shopping-cart-2-line cart-icon"></i
        ></a>
        <a href="#"><i class="ri-user-line user-icon"></i></a>
      </div>
    </div>
  </nav>
    
    `;

    wrapper.insertAdjacentHTML("beforeend", html);
  };

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
    e.preventDefault();
    const clickedUser = e.target.closest(".user-icon");
    const cart = e.target.closest(".cart-icon");

    if (clickedUser) {
      formContainer.classList.toggle("hidden");
    } else if (cart) {
      updateNavbar();
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
