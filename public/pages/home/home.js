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
    imgSrc: "../../../assets/arroz-branco-tipo-1-tio-urbano-pacote-2kg.png",
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

const productsContainer = document.querySelector(".products-on-sale");

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
    <h2 class="product-title">${product.price}</h2>
    <p class="product-quantity">${product.price}</p>
  </div>
  `;

  productsContainer.appendChild(productCard);
})

const brands = [
  {
    name: "Nestlé",
    imgSrc: "../../../assets/nestle-logo-2.svg",
    imgAlt: "Nestlé", 
    href: "#nestle"
  },
  {
    name: "Unilever",
    imgSrc: "../../../assets/unilever-seeklogo.png",
    imgAlt: "Unilever", 
    href: "#unilever"
  },
  {
    name: "Sadia",
    imgSrc: "../../../assets/sadia.svg",
    imgAlt: "Sadia", 
    href: "#sadia"
  },
  {
    name: "Ambev",
    imgSrc: "../../../assets/cervejaria-ambev-seeklogo.svg",
    imgAlt: "Ambev", 
    href: "#ambev"
  },
  {
    name: "Lacta",
    imgSrc: "../../../assets/lacta-logo.svg",
    imgAlt: "Lacta", 
    href: "#lacta"
  },
]

const brandsContainer = document.querySelector(".product-brand");

brands.forEach(brand => {
  const productBrand = document.createElement("div");

  productBrand.classList.add("brand-icon");  
  productBrand.innerHTML = 
    `
    <a href="${brands.href}">
      <img class="category-icon" src="${brand.imgSrc}" alt="${brand.imgAlt}" />
    </a>
    `

    brandsContainer.appendChild(productBrand);
})

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
]

const categoriesContainer = document.querySelector(".product-categories");

categories.forEach(category => {
  const productCategoryContainer = document.createElement("div");
  productCategoryContainer.classList.add("product-category-container");
  
  productCategoryContainer.innerHTML = `
    <a class="product-category" href="../categorias/${category.name.toLowerCase()}.html">
      <img class="category-icon" src="${category.img}" alt="${category.name}" />
    </a>
    <div class="product-category-description">
      <a href="../categorias/${category.name.toLowerCase()}.html">
        <h3>${category.name.toUpperCase()}</h3>
      </a>
    </div>
  `;
  
  categoriesContainer.appendChild(productCategoryContainer);
});