document.addEventListener("DOMContentLoaded", load);

function load() {
  fetch("productList.json")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      createProductList(data);
    });
  updateCartNumber();
}

function createProductList(productList) {
  let products = document.getElementsByClassName("productList")[0];
  for (let i = 0; i < productList.length; i++) {
    let item = document.createElement("div");
    item.className = "product";

    let img = document.createElement("img");
    img.src = `${productList[i].image}`;
    img.alt = productList[i].name;

    let h2 = document.createElement("h2");
    h2.innerHTML += productList[i].name;

    let p = document.createElement("p");
    p.innerHTML += productList[i].Description;

    let h4 = document.createElement("h4");

    h4.innerHTML += formatter.format(productList[i].price);

    let btn = document.createElement("button");
    btn.innerHTML += "Add to Cart";
    btn.className = "btn btn-primary";
    btn.type = "button";
    btn.addEventListener("click", () => {
      addToCart(productList[i]);
    });

    item.appendChild(img);
    item.appendChild(h2);
    item.appendChild(p);
    item.appendChild(h4);
    item.appendChild(btn);

    products.appendChild(item);
  }
}

function addToCart(product) {
  let value = localStorage.getItem(product.id);
  let quantity = 1;
  if (value) {
    quantity = Number(JSON.parse(value).quantity) + 1;
  }
  localStorage.setItem(
    product.id,
    JSON.stringify({
      ...product,
      quantity,
    })
  );
  location.reload();
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

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
