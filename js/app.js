async function test() {
	const res = await fetch("http://51.38.232.174:3001/products", {
		method: "GET",
	});
	const pizzas = await res.json();

	return pizzas;
}

function renderBasketAside() {
	const aside = document.createElement("aside");
	aside.className = "basket-aside";

	const title = document.createElement("h2");
	title.textContent = "Votre panier (0)";

	const emptyDiv = document.createElement("div");
	emptyDiv.className = "empty-basket";

	const img = document.createElement("img");
	img.src = "../images/pizza.png";
	img.alt = "";

	const text = document.createElement("p");
	text.textContent = "Votre panier est vide...";

	emptyDiv.appendChild(img);
	emptyDiv.appendChild(text);
	aside.appendChild(title);
	aside.appendChild(emptyDiv);

	const mainWrapper = document.querySelector(".main-wrapper");
	mainWrapper.appendChild(aside);
}

function createPanier(name, counter, price, total) {
    const divTotal = createElement("div", { className: "baskets-with-pizza" });

    const ul = createElement("ul", { className: "basket-products" });
    divTotal.appendChild(ul);

    const liItem = createElement("li", { className: "basket-product-item" });
    ul.appendChild(liItem);

    const spanName = createElement("span", { className: "basket-product-item-name" }, name);
    liItem.appendChild(spanName);

    const spanDetails = createElement("span", { className: "basket-product-details" });
    liItem.appendChild(spanDetails);

    const spanQuantity = createElement("span", { className: "basket-product-details-quantity" }, counter);
    spanDetails.appendChild(spanQuantity);

    const spanPrice = createElement("span", { className: "basket-product-details-unit-price" }, price);
    spanDetails.appendChild(spanPrice);

    const spanPriceTotal = createElement("span", { className: "basket-product-details-total-price" }, total);
    spanDetails.appendChild(spanPriceTotal);

    const imgRemove = createElement("img", { src: "../images/remove-icon.svg", alt: "remove", className: "basket-product-remove-icon" });
    liItem.appendChild(imgRemove);

    return divTotal;
}

function renderPizzas(pizzaList) {
	const container = document.querySelector(".pizzas-wrapper");
	container.innerHTML = "";

	for (let i = 0; i < pizzaList.length; i++) {
		const pizza = pizzaList[i];

		const pizzaItem = document.createElement("div");
		pizzaItem.classList.add("pizza-item");

		pizzaItem.innerHTML = `
        <img class="pizza-picture" src="${pizza.image}" alt="${pizza.name}" />
        <span class="add-to-cart-btn" name="AddToCartBtn">
          <img src="../images/carbon_shopping-cart-plus.svg" alt="" />
          Ajouter au panier
        </span>
        <ul class="pizza-infos">
          <li class="pizza-name">${pizza.name}</li>
          <li class="pizza-price">${pizza.price}</li>
          <li class="pizza-description">${pizza.description}</li>
        </ul>
      `;

		container.appendChild(pizzaItem);
	}
}
  
  const cart = [];
  
  function renderCart() {
    const content = document.getElementById("basket-content");
    content.innerHTML = "";
  
    let totalCount = 0;
    let totalPrice = 0;
  
    cart.forEach(item => {
      totalCount += item.quantity;
      totalPrice += item.price * item.quantity;
  
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
  
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-img" />
        <div class="cart-details">
          <p class="cart-name">${item.name}</p>
          <p class="cart-qty">x${item.quantity}</p>
          <p class="cart-price">${(item.price * item.quantity).toFixed(2)} €</p>
        </div>
      `;
  
      content.appendChild(itemDiv);
    });
  
    const title = document.getElementById("cart-title");
    title.textContent = `Votre panier (${totalCount})`;
  
    if (totalCount === 0) {
      content.innerHTML = `
        <div class="empty-basket">
          <img src="../images/pizza.png" alt="" />
          <p>Votre panier est vide...</p>
        </div>
      `;
    }
  }
  
  function renderPizzas(pizzaList) {
    const container = document.querySelector(".pizzas-wrapper");
    container.innerHTML = "";
  
    for (let i = 0; i < pizzaList.length; i++) {
      const pizza = pizzaList[i];
  
      const pizzaItem = document.createElement("div");
      pizzaItem.classList.add("pizza-item");
  
      pizzaItem.innerHTML = `
        <img class="pizza-picture" src="${pizza.image}" alt="${pizza.name}" />
        <span class="add-to-cart-btn" name="AddToCartBtn" data-index="${i}">
          <img src="../images/carbon_shopping-cart-plus.svg" alt="" />
          Ajouter au panier
        </span>
        <ul class="pizza-infos">
          <li class="pizza-name">${pizza.name}</li>
          <li class="pizza-price">${pizza.price.toFixed(2)} €</li>
          <li class="pizza-description">${pizza.description}</li>
        </ul>
      `;
  
      container.appendChild(pizzaItem);
    }
  
    document.querySelectorAll("[name='AddToCartBtn']").forEach(button => {
      button.addEventListener("click", e => {
        const index = parseInt(e.currentTarget.dataset.index);
        const selectedPizza = pizzas[index];
  
        const existing = cart.find(p => p.name === selectedPizza.name);
        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push({ ...selectedPizza, quantity: 1 });
        }
  
        renderCart();
      });
    });
  }
  

document.addEventListener("DOMContentLoaded", async () => {
	const pizzas = await test();
	console.log(pizzas);

	renderBasketAside();

	// le .then(data)  si data c l'a ou ya les donner tu change renderPizzas(data)
	renderPizzas(pizzas);

    renderBasketAside();
    renderPizzas(pizzas);
    renderCart();
});
