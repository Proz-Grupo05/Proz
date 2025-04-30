document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const checkoutButton = document.querySelector(".checkout-button");

    function getCart() {
        return JSON.parse(localStorage.getItem("carrinho")) || [];
    }

    function saveCart(cart) {
        localStorage.setItem("carrinho", JSON.stringify(cart));
    }

    function parsePrice(priceStr) {
        const cleanPrice = priceStr.replace('R$', '').replace(',', '.').split(' ')[0];
        return parseFloat(cleanPrice);
    }

    function showToast(message) {
        const toast = document.createElement("div");
        toast.className = "toast show";
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 1800);
    }

    function renderCart() {
        const cart = getCart();
        cartItemsContainer.innerHTML = "";

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty">Seu carrinho está vazio.</p>';
            cartTotalElement.textContent = "R$0,00";
            checkoutButton.disabled = true;
            return;
        }

        checkoutButton.disabled = false;
        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            const price = parsePrice(item.price);
            const subtotal = (price * item.quantity).toFixed(2);

            itemElement.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.imgAlt}" class="cart-item-img" />
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p>Preço unitário: ${item.price}</p>
                    <p>Quantidade: ${item.quantity}</p>
                    <p>Subtotal: R$${subtotal}</p>
                    <button class="remove-button" data-index="${index}"><i class="fas fa-trash"></i> Remover</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        const total = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0).toFixed(2);
        cartTotalElement.textContent = `R$${total}`;
    }

    function removeFromCart(index) {
        const cart = getCart();
        const removedItem = cart.splice(index, 1)[0];
        saveCart(cart);
        renderCart();
        showToast(`"${removedItem.title}" removido do carrinho.`);
        window.updateCartButton && window.updateCartButton();
    }

    cartItemsContainer.addEventListener("click", (e) => {
        if (e.target.closest(".remove-button")) {
            const index = e.target.closest(".remove-button").dataset.index;
            removeFromCart(index);
        }
    });

    checkoutButton.addEventListener("click", () => {
        const nomeUsuario = localStorage.getItem("usuarioLogado");
        if (!nomeUsuario) {
            showToast("Por favor, faça login para continuar a compra.");
            setTimeout(() => {
                window.location.href = "../login/login.html";
            }, 1800);
        } else {
            showToast("Redirecionando para o checkout...");
            setTimeout(() => {
                window.location.href = "../checkout/checkout.html";
            }, 1800);
        }
    });

    renderCart();
});