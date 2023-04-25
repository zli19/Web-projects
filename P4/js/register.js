document.addEventListener("DOMContentLoaded", load);

function load() {
  updateCartNumber();
  hideErrors();
  let loginForm = document.getElementById("registerForm");
  loginForm.addEventListener("submit", validate);
}

function hideErrors() {
  let errors = document.getElementsByClassName("text-danger");
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
  let controls = ["username", "email", "password", "password-again"];

  for (let i = 0; i < controls.length; i++) {
    let target = document.getElementById(controls[i]);
    if (target.value == null || target.value.trim() == "") {
      document.getElementById(controls[i] + "-error").style.display = "block";
      target.focus();
      return true;
    }
  }

  let emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  if (!emailRegex.test(document.getElementById("email").value)) {
    document.getElementById("email-format-error").style.display = "block";
    document.getElementById("email").focus();
    return true;
  }

  let password = document.getElementById("password");
  let passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!passwordRegex.test(password.value)) {
    document.getElementById("password-invalid-error").style.display = "block";
    password.focus();
    return true;
  }

  let passwordAgain = document.getElementById("password-again");
  if (password.value != passwordAgain.value) {
    document.getElementById("password-match-error").style.display = "block";
    passwordAgain.focus();
    return true;
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
