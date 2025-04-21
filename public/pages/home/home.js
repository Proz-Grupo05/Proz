const products = [
  {
    title: "Pão francês",
    price: "R$12,89 / kg",
    imgSrc: "../../../assets/pao-frances.jpg",
    imgAlt: "Pão Francês"
  },
  {
    title: "Acém bovino",
    price: "R$32,99 / kg",
    imgSrc: "../../../assets/acem-bovino.jpeg",
    imgAlt: "Acém bovino"
  },
  {
    title: "Arroz Branco Tipo 1 Tio Urbano (2kg)",
    price: "R$15,57 / un",
    imgSrc: "../../../assets/arroz-branco-tio-urbano-pacote-2kg.png",
    imgAlt: "Arroz Branco Tipo 1 Tio Urbano (2kg)"
  },
  {
    title: "Cerveja Itaipava lata 550ml",
    price: "R$5,99 / un",
    imgSrc: "../../../assets/itaipava-lata-550ml.png",
    imgAlt: "Cerveja Itaipava lata 550ml"
  },
  {
    title: "Kit Dove Reconstrução Shampoo 350ml + Condicionador 175ml",
    price: "R$19,99",
    imgSrc: "../../../assets/Kit Promocional Shampoo 350ml + Condicionador 175ml Dove Reconstrução + Queratina Preço Especial.png",
    imgAlt: "Kit Dove Reconstrução Shampoo 350ml + Condicionador 175ml"
  },
  {
    title: "Sabão Líquido Lavagem Perfeita Omo Galão 3L Lavagem Perfeita",
    price: "R$44,90 / un",
    imgSrc: "../../../assets/Sabão Líquido Lavagem Perfeita Omo Galão 3Lt Lavagem Perfeita.jpg",
    imgAlt: "Sabão Líquido Lavagem Perfeita Omo Galão 3Lt Lavagem Perfeita"
  },
  {
    title: "Azeite Espanhol Extra Virgem Borges Vd 500ml",
    price: "R$49,90 / un",
    imgSrc: "../../../assets/Azeite Espanhol Extra Virgem Borges Vd 500ml.jpg",
    imgAlt: "Azeite Espanhol Extra Virgem Borges Vd 500ml"
  },
  {
    title: "Massa de Arroz Zero Gluten Urbano 500g Pena",
    price: "R$4,99 / un",
    imgSrc: "../../../assets/Massa de Arroz Zero Gluten Urbano 500g Pena.jpg",
    imgAlt: "Massa de Arroz Zero Gluten Urbano 500g Pena"
  },
  {
    title: "Requeijão Cremoso Tradicional Vigor 200g",
    price: "R$10,90 / un",
    imgSrc: "../../../assets/Requeijão Cremoso Tradicional Vigor 200g.jpg",
    imgAlt: "Requeijão Cremoso Tradicional Vigor 200g"
  },
  {
    title: "Creme Dental Colgate Tripla Ação 90g",
    price: "R$6,89 / un",
    imgSrc: "../../../assets/Creme Dental Tripla Ação Colgate 90g Original.png",
    imgAlt: "Creme Dental Colgate Tripla Ação 90g"
  }
];

const brands = [
  {
    name: "Nestlé",
    imgSrc: "../../../assets/nestle-logo-2.svg",
    imgAlt: "Nestlé",
    href: "../categorias/nestle.html"
  },
  {
    name: "Unilever",
    imgSrc: "../../../assets/unilever-seeklogo.png",
    imgAlt: "Unilever",
    href: "../categorias/unilever.html"
  },
  {
    name: "Sadia",
    imgSrc: "../../../assets/sadia.svg",
    imgAlt: "Sadia",
    href: "../categorias/sadia.html"
  },
  {
    name: "Ambev",
    imgSrc: "../../../assets/cervejaria-ambev-seeklogo.svg",
    imgAlt: "Ambev",
    href: "../categorias/ambev.html"
  },
  {
    name: "Lacta",
    imgSrc: "../../../assets/lacta-logo.svg",
    imgAlt: "Lacta",
    href: "../categorias/lacta.html"
  }
];

const categories = [
  {
    name: "Padaria",
    img: "../../../assets/padaria.svg"
  },
  {
    name: "Carnes",
    img: "../../../assets/carnes.svg"
  },
  {
    name: "Bebidas",
    img: "../../../assets/bebidas.svg"
  },
  {
    name: "Limpeza",
    img: "../../../assets/produtos-de-limpeza.svg"
  },
  {
    name: "Higiene",
    img: "../../../assets/higiene-pessoal.svg"
  }
];

if (typeof window.addToCart !== "function") {
  window.addToCart = function (product) {
    let cart = JSON.parse(localStorage.getItem("carrinho")) || []; 
    
    const existingProduct = cart.find(item => item.title === product.title);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("carrinho", JSON.stringify(cart));  
    
    mostrarToast(`${product.title} adicionado ao carrinho!`);
    
    if (typeof window.updateCartButton === "function") {
      window.updateCartButton();
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.querySelector(".products-on-sale");
  if (productsContainer) {
    products.forEach(product => {
      const productCard = document.createElement("article");
      productCard.classList.add("product");
      productCard.innerHTML = `
        <div class="product-img-btn">
          <button class="add-button">
            <i class="fa-solid fa-plus"></i>
          </button>
          <div class="product-img">
            <img src="${product.imgSrc}" alt="${product.imgAlt}" />
          </div>
        </div>
        <div class="product-description">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-quantity">${product.price}</p>
        </div>
      `;
      const addButton = productCard.querySelector(".add-button");
      addButton.addEventListener("click", () => {
        window.addToCart(product);
      });
      productsContainer.appendChild(productCard);
    });
  }

  const brandsContainer = document.querySelector(".product-brand");
  if (brandsContainer) {
    brands.forEach(brand => {
      const productBrand = document.createElement("div");
      productBrand.classList.add("brand-icon");
      productBrand.innerHTML = `
        <a href="${brand.href}">
          <img class="category-icon" src="${brand.imgSrc}" alt="${brand.imgAlt}" />
        </a>
      `;
      brandsContainer.appendChild(productBrand);
    });
  }

  const categoriesContainer = document.querySelector(".product-categories");
  if (categoriesContainer) {
    categories.forEach(category => {
      const productCategory = document.createElement("div");
      productCategory.classList.add("product-category-container");
      productCategory.innerHTML = `
        <a class="product-category" href="../categorias/${category.name.toLowerCase()}.html">
          <img class="category-icon" src="${category.img}" alt="${category.name}" />
        </a>
        <div class="product-category-description">
          <a href="../categorias/${category.name.toLowerCase()}.html">
            <h3>${category.name.toUpperCase()}</h3>
          </a>
        </div>
      `;
      categoriesContainer.appendChild(productCategory);
    });
  }

  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn) {
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    if (usuarioLogado) {
      const nomeUsuario = JSON.parse(usuarioLogado);
      loginBtn.innerHTML = `<i class="fas fa-user icon"></i>${nomeUsuario}`;

      loginBtn.addEventListener("click", function (e) {
        e.preventDefault();

        localStorage.removeItem("usuarioLogado");

        mostrarToast("Logout realizado com sucesso!");

        setTimeout(() => {
          loginBtn.innerHTML = `<i class="fas fa-user icon"></i>Entrar`;
          loginBtn.href = "../login/login.html";
          window.location.reload();
        }, 500);

        return false;
      });

      loginBtn.removeAttribute("href");
    }
  }
});

if (typeof mostrarToast !== "function") {
  function mostrarToast(mensagem) {
    let toast = document.getElementById("toast");

    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }

    toast.textContent = mensagem;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  }
}