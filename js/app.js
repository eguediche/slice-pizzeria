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
  
  const pizzas = [
    {
      name: "Margherita",
      price: "$16.99",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      description: "Tomate, mozzarella, basilic"
    },
    {
      name: "Pepperoni",
      price: "$17.99",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      description: "Tomate, mozzarella, pepperoni"
    },
    {
      name: "4 Fromages",
      price: "$18.99",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      description: "Mozzarella, gorgonzola, chèvre, parmesan"
    }
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