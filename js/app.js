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

document.addEventListener("DOMContentLoaded", async () => {
	const pizzas = await test();
	console.log(pizzas);

	renderBasketAside();

	// le .then(data)  si data c l'a ou ya les donner tu change renderPizzas(data)
	renderPizzas(pizzas);
});
