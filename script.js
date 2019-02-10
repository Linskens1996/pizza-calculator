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
    pizzaBtn.id = "pizza-btn" + idNumber;
    pizzaBtn.onclick = function openModal() { // not finished ------------------------------------------------------------
      if (this.id === "pizza-btn1") {
        document.getElementById("modal-box1").style.display = 'block';
      } else if (this.id === "pizza-btn2") {
        document.getElementById("modal-box2").style.display = 'block';
      } else if (this.id === "pizza-btn3") {
        document.getElementById("modal-box3").style.display = 'block';
      } else {
        document.getElementById("modal-box4").style.display = 'block';
      }
    };
    pizzaBtn.innerHTML = "Meer info en bestellen";
    div2.appendChild(pizzaBtn);

    var modalBox = document.createElement("div");
    modalBox.id = "modal-box" + idNumber;
    modalBox.className = "w3-modal";
    document.getElementById("body").appendChild(modalBox);

    var modalContentBox = document.createElement("div");
    modalContentBox.className = "w3-modal-content";
    modalBox.appendChild(modalContentBox);

    var modalContainer = document.createElement("div");
    modalContainer.className = "w3-container w3-col m6 w3-white";
    modalContentBox.appendChild(modalContainer);

    var modalContainer2 = document.createElement("div");
    modalContainer2.className = "w3-container w3-col m6 w3-white";
    var priceHeader = document.createElement("h3");
    priceHeader.innerHTML = "Totaalprijs pizza";
    modalContainer2.appendChild(priceHeader);
    var priceShow = document.createElement("p");
    var totalPrice = pizzasarray.price;
    priceShow.innerHTML = "€ " + totalPrice;
    modalContainer2.appendChild(priceShow);
    modalContentBox.appendChild(modalContainer2);

    var closeModal = document.createElement("span");
    closeModal.className = "w3-button w3-display-topright";
    closeModal.id = "close-btn" + idNumber;
    closeModal.onclick = function closeModal() { // not finished ---------------------------------------------------------
      if (this.id === "close-btn1") {
        document.getElementById("modal-box1").style.display = 'none';
      } else if (this.id === "close-btn2") {
        document.getElementById("modal-box2").style.display = 'none';
      } else if (this.id === "close-btn3") {
        document.getElementById("modal-box3").style.display = 'none';
      } else {
        document.getElementById("modal-box4").style.display = 'none';
      }
    };
    closeModal.innerHTML = "&times;";
    modalContentBox.appendChild(closeModal);

    var modalHeader = document.createElement("h2");
    modalHeader.id = "pizzaheader" + idNumber + "modal";
    var headerTextModal = "document.getElementById('pizzaheader" + idNumber + "modal').innerHTML = " + "\'" + pizzasarray.name + "\'";
    modalContainer.appendChild(modalHeader);

    var modalHeaderToppings = document.createElement("h3");
    modalHeaderToppings.innerHTML = "Toppings";
    modalContainer.appendChild(modalHeaderToppings);

    var modalToppings = document.createElement("div");
    modalToppings.id = "modal-toppings" + idNumber;
    modalToppings.style = "margin-bottom:24px;";
    modalContainer.appendChild(modalToppings);

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
    checkbox.className = "w3-check";
    checkbox.id = "checkbox0" + i;
    checkbox.value = toppingsarray.price;
    checkbox.onchange = function checkTotal() {
      console.log("WTF");
    };

    var label = document.createElement("label");
    var tn = " " + toppingsarray.name + " + € " + toppingsarray.price;
    label.id = "label0" + i;
    label.appendChild(document.createTextNode(tn));
    var br = document.createElement("br");
    label.appendChild(br);

    for (let i = 1; i <= 4; i++) {
      var checkboxList = "document.getElementById('modal-toppings" + i + "').appendChild(checkbox.cloneNode())";
      var labelList = "document.getElementById('modal-toppings" + i + "').appendChild(label.cloneNode(true))";
      eval(checkboxList);
      eval(labelList);
    }
  }
});