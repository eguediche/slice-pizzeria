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
  
  const pizzas =
    [
        {
            "id": "66f97356-f31c-4cc5-803a-7c42b25758e0",
            "name": "The Godfather Pizza",
            "description": "Gourmet Italian sausage, fresh garlic, onions & our hot giardiniera.",
            "price": 15,
            "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
            "category": {
                "id": "c8755d47-4595-4768-9b0a-4cdc2fa92dd9",
                "name": "pizza",
                "description": "High qualities Pizza with organic ingredients and good vibes."
            }
        },
        {
            "id": "08857e40-181e-4e38-a336-22c77f532fb4",
            "name": "The Veggie Pizza",
            "description": "Vegetarian. Mushrooms, onions & green peppers with tomatoes on top.",
            "price": 13,
            "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
            "category": {
                "id": "c8755d47-4595-4768-9b0a-4cdc2fa92dd9",
                "name": "pizza",
                "description": "High qualities Pizza with organic ingredients and good vibes."
            }
        },
  ];
  
  renderBasketAside();
  
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
  
  renderPizzas(pizzas);