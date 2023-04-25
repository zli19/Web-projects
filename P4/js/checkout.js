document.addEventListener("DOMContentLoaded", load);

function load() {
  hideErrors();

  loadCartItems();
  loadYearSelect();
  let checkoutForm = document.getElementById("checkoutForm");
  checkoutForm.addEventListener("submit", validate);
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
  let controls = [
    "fullName",
    "address",
    "city",
    "province",
    "postal",
    "nameOnCard",
    "cardNumber",
  ];

  for (let i = 0; i < controls.length; i++) {
    let target = document.getElementById(controls[i]);
    if (target.value == null || target.value.trim() == "") {
      document.getElementById(controls[i] + "-error").style.display = "block";
      target.focus();
      return true;
    }
  }

  let postalRegex = new RegExp(
    /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i
  );
  if (!postalRegex.test(document.getElementById("postal").value)) {
    document.getElementById("postal-format-error").style.display = "block";
    document.getElementById("postal").focus();
    return true;
  }

  let monthElement = document.getElementById("month");
  if (isNaN(monthElement.value)) {
    document.getElementById("month-error").style.display = "block";
    monthElement.focus();
    return true;
  }

  let yearValue = document.getElementById("year").value;
  let currentDate = new Date();
  if (
    yearValue == currentDate.getFullYear() &&
    monthElement.value < currentDate.getMonth() + 1
  ) {
    console.log(currentDate.getMonth());
    document.getElementById("expiry-error").style.display = "block";
    monthElement.focus();
    return true;
  }

  return false;
}

function loadCartItems() {
  let items = document.getElementById("items");

  let subtotal = 0;
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let product = JSON.parse(localStorage.getItem(key));
    subtotal += Number(product.price) * Number(product.quantity);
    let item = document.createElement("div");
    item.className = "card";

    let img = document.createElement("img");
    img.className = "card-image-top m-auto";
    img.src = product.image;
    img.alt = product.name;

    let div = document.createElement("div");
    div.className = "card-body";
    let title = document.createElement("p");
    title.className = "card-title";
    title.innerHTML += product.name;
    let priceAndQty = document.createElement("small");
    priceAndQty.className = "card-text";
    priceAndQty.innerHTML += `${formatter.format(product.price)} <b>Qty:${
      product.quantity
    }</b>`;

    div.appendChild(title);
    div.appendChild(priceAndQty);

    item.appendChild(img);
    item.appendChild(div);

    items.appendChild(item);
  }

  let sub = document.getElementById("subtotal");
  sub.innerHTML += formatter.format(subtotal);

  let gst = document.getElementById("GST");
  gst.innerHTML += formatter.format(subtotal * 0.05);

  let pst = document.getElementById("PST");
  pst.innerHTML += formatter.format(subtotal * 0.07);

  let total = document.getElementById("total");
  total.innerHTML += formatter.format(subtotal * 1.12);
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function loadYearSelect() {
  let year = document.getElementById("year");
  let currentDate = new Date();
  for (let i = 0; i < 7; i++) {
    let newYearOption = document.createElement("option");
    newYearOption.value = currentDate.getFullYear() + i;
    newYearOption.innerHTML = currentDate.getFullYear() + i;
    year.appendChild(newYearOption);
  }
}
