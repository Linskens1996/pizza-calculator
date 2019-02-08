// Dennis Linskens - Pizza calculator

var pizzas = [
  {
    name: "Pizza BBQ Mixed Grill",
    image: "images/pizzabbqmixedgrill.png",
    price: 8.99
  },
  {
    name: "Pizza Chicken Kebab",
    image: "images/pizzachickenkebab.png",
    price: 8.99
  },
  {
    name: "Pizza Chicken Supreme",
    image: "images/pizzachickensupreme.png",
    price: 7.99
  },
  {
    name: "Pizza Americana",
    image: "images/pizzaamericana.png",
    price: 7.99
  }
];

// -----------------------------------------------------------------------------------------------------------------------
// Show the content of the pizzas-array on the homepage and in the modal-boxes -------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
for (let i = 0; i < pizzas.length; i++) {
  const pizzasarray = pizzas[i];
  var idNumber = i + 1;

  var headerText = "document.getElementById('pizzaheader" + idNumber + "').innerHTML = " + "\'" + pizzasarray.name + "\'";
  var pizzaPrice = "document.getElementById('pizzaprice" + idNumber + "').innerHTML = " + "\'" + "€ " + pizzasarray.price + "\'";
  var imageSRC = "document.getElementById('pizzaimage" + idNumber + "').src = " + "\'" + pizzasarray.image + "\'";
  var headerTextModal = "document.getElementById('pizzaheader" + idNumber + "modal').innerHTML = " + "\'" + pizzasarray.name + "\'";

  eval(headerText);
  eval(pizzaPrice);
  eval(headerTextModal);
  eval(imageSRC);
}

var toppings = [
  {
    name: "Tonijn",
    price: 1.50
  },
  {
    name: "Pulled beef",
    price: 1.50
  },
  {
    name: "Knoflooksaus swirl",
    price: 1.00
  },
  {
    name: "Spaanse pepers",
    price: 1.00
  },
  {
    name: "Lente ui",
    price: 0.50
  },
  {
    name: "Paprikamix",
    price: 0.50
  }
];

// -----------------------------------------------------------------------------------------------------------------------
// Show toppings in the modal boxes --------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
for (let i = 0; i < toppings.length; i++) {
  const toppingsarray = toppings[i];

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "id";
  checkbox.className = "w3-check";

  var tn = " " + toppingsarray.name + " + € " + toppingsarray.price;
  var label = document.createElement("label");
  label.htmlFor = "id";
  label.appendChild(document.createTextNode(tn));

  var br = document.createElement("br");
  label.appendChild(br);

  document.getElementById("modal-toppings1").appendChild(checkbox);
  document.getElementById("modal-toppings1").appendChild(label);
}