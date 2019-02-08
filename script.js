// Dennis Linskens - Pizza calculator
document.addEventListener("DOMContentLoaded", function() {
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

    var div1 = document.createElement("div");
    div1.className = "w3-col m6";
    document.getElementById("body").appendChild(div1);
    var div2 = document.createElement("div");
    div2.className = "w3-container w3-center";
    div1.appendChild(div2);

    var headerPizza = document.createElement("h2");
    headerPizza.id = "pizzaheader" + idNumber;
    var headerText = "document.getElementById('pizzaheader" + idNumber + "').innerHTML = " + "\'" + pizzasarray.name + "\'";
    div2.appendChild(headerPizza);

    var pizzaFoto = document.createElement("img");
    pizzaFoto.alt = "Pizza image";
    pizzaFoto.id = "pizzaimage" + idNumber;
    pizzaFoto.style = "width:500px;height:auto;";
    var imageSRC = "document.getElementById('pizzaimage" + idNumber + "').src = " + "\'" + pizzasarray.image + "\'";
    div2.appendChild(pizzaFoto);

    var priceP = document.createElement("p");
    priceP.id = "pizzaprice" + idNumber;
    var pizzaPrice = "document.getElementById('pizzaprice" + idNumber + "').innerHTML = " + "\'" + "€ " + pizzasarray.price + "\'";
    div2.appendChild(priceP);

    var pizzaBtn = document.createElement("button");
    pizzaBtn.className = "w3-btn w3-white w3-margin-bottom";
    // pizzaBtn.id = "btn" + idNumber;
    // var btnId = "btn" + idNumber;
    // pizzaBtn.onclick = "console.log('hoi haha')";
    pizzaBtn.innerHTML = "Meer info en bestellen";
    div2.appendChild(pizzaBtn);

    // var headerTextModal = "document.getElementById('pizzaheader" + idNumber + "modal').innerHTML = " + "\'" + pizzasarray.name + "\'";

    eval(headerText);
    eval(pizzaPrice);
    // eval(headerTextModal);
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
//   for (let i = 0; i < toppings.length; i++) {
//     const toppingsarray = toppings[i];

//     var checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.className = "w3-check";
//     checkbox.id = "checkbox0" + i;

//     var label = document.createElement("label");
//     var tn = " " + toppingsarray.name + " + € " + toppingsarray.price;
//     label.id = "label0" + i;
//     label.appendChild(document.createTextNode(tn));

//     document.getElementById("modal-toppings1").appendChild(checkbox);
//     document.getElementById("modal-toppings1").appendChild(label);

//     var br = document.createElement("br");
//     label.appendChild(br);  
//   }
});