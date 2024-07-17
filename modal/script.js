"use strict";

// Variables which contain DOM elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// function for opening modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// function for closing modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
