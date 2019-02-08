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

for (let i = 0; i < pizzas.length; i++) {
  const pizzasarray = pizzas[i];
  var idNumber = i + 1;
  var headerText = "document.getElementById('pizzaheader" + idNumber + "').innerHTML = " + "\'" + pizzasarray.name + "\'";
  eval(headerText);
}

function imageFunction() {
  var image1 = document.getElementById("pizzaimage1"),
      image2 = document.getElementById("pizzaimage2"),
      image3 = document.getElementById("pizzaimage3"),
      image4 = document.getElementById("pizzaimage4");

  image1.src = pizzas[0].image;
  image2.src = pizzas[1].image;
  image3.src = pizzas[2].image;
  image4.src = pizzas[3].image;
};
imageFunction();

function priceFunction() {
  var price1 = document.getElementById("pizzaprice1"),
      price2 = document.getElementById("pizzaprice2"),
      price3 = document.getElementById("pizzaprice3"),
      price4 = document.getElementById("pizzaprice4");

  price1.innerHTML = "€ " + pizzas[0].price;
  price2.innerHTML = "€ " + pizzas[1].price;
  price3.innerHTML = "€ " + pizzas[2].price;
  price4.innerHTML = "€ " + pizzas[3].price;
};
priceFunction();