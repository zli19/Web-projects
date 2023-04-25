document.addEventListener("DOMContentLoaded", load);

function load() {
  updateCartNumber();
  hideErrors();
  let loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", validate);
}

function hideErrors() {
  let errors = document.getElementsByClassName("form-text");
  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}

function validate(e) {
  hideErrors();

  if (formHasErrors()) {
    e.preventDefault();

    return false;
  }
  return true;
}

function formHasErrors() {
  let controls = ["username", "password"];

  for (let i = 0; i < controls.length; i++) {
    let target = document.getElementById(controls[i]);
    if (target.value == null || target.value.trim() == "") {
      document.getElementById(controls[i] + "-error").style.display = "block";
      target.focus();
      return true;
    }
  }
  return false;
}

function updateCartNumber() {
  if (localStorage.length > 0) {
    let cart = document.getElementsByClassName("cartIcon")[0];
    let number = 0;
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let product = JSON.parse(localStorage.getItem(key));
      number += Number(product.quantity);
    }
    cart.innerHTML += number;
  }
}
