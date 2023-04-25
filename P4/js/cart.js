document.addEventListener("DOMContentLoaded", load);

function load() {
  if (localStorage.length > 0) {
    let cart = document.getElementsByClassName("cartIcon")[0];

    let subtotal = 0;
    let number = 0;
    let ol1 = document.getElementsByTagName("ol")[0];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let product = JSON.parse(localStorage.getItem(key));
      let li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-start";
      let row = document.createElement("div");
      row.className = "ms-2 me-auto row";

      let img = document.createElement("img");
      img.src = product.image;
      img.className = "col";
      img.style.width = "100px";

      let div = document.createElement("div");
      div.className = "fw-bold col";
      div.innerHTML += product.name;

      row.appendChild(img);
      row.appendChild(div);

      let div1 = document.createElement("div");
      let p = document.createElement("p");
      p.innerHTML += `${formatter.format(product.price)}`;

      let qty = document.createElement("input");
      qty.type = "number";
      qty.name = product.id;
      qty.value = product.quantity;
      qty.min = "0";
      qty.style.width = "50px";
      qty.addEventListener("change", (e) => {
        updateLocalStorage(product, e.target.value);
      });

      div1.appendChild(p);
      div1.appendChild(qty);

      li.appendChild(row);
      li.appendChild(div1);

      ol1.appendChild(li);

      subtotal += Number(product.price) * Number(product.quantity);
      number += Number(product.quantity);
    }

    let sub = document.createElement("p");
    sub.className = "ms-auto";
    sub.innerHTML += `Subtotal (${number} item): ${formatter.format(subtotal)}`;

    ol1.appendChild(sub);
    cart.innerHTML += number;

    let ol2 = document.getElementsByTagName("ol")[1];
    let li = document.createElement("li");
    li.className = "list-group-item";

    let div1 = document.createElement("div");
    div1.className = "ms-2 me-auto";

    let div2 = document.createElement("div");
    div2.className = "fw-bold";
    div2.innerHTML += `Subtotal (${number} item):`;

    div1.appendChild(div2);
    div1.innerHTML += formatter.format(subtotal);

    let btn = document.createElement("a");
    btn.className = "btn btn-primary";
    btn.innerHTML += "Proceed to Checkout";
    btn.href = "./checkout.html";

    li.appendChild(div1);
    li.appendChild(btn);

    ol2.appendChild(li);
  } else {
    let legend = document.getElementsByTagName("legend")[0];
    legend.innerHTML = "Your Cart is empty.";
  }
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function updateLocalStorage(product, quantity) {
  if (quantity == 0) {
    localStorage.removeItem(product.id);
  } else {
    let value = { ...product, quantity };
    localStorage.setItem(product.id, JSON.stringify(value));
  }
  location.reload();
}
