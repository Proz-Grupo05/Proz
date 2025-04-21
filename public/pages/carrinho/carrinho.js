document.addEventListener("DOMContentLoaded", () => {
    const cartBtn = document.querySelector('.top-menu-cart .cart-btn');
    const loginBtn = document.querySelector('.top-menu-cart .login-btn');

    function parsePrice(priceStr) {
        const cleanPrice = priceStr.replace('R$', '').replace(',', '.').split(' ')[0];
        return parseFloat(cleanPrice);
    }

    function getCart() {
        return JSON.parse(localStorage.getItem("carrinho")) || [];
    }

    function saveCart(cart) {
        localStorage.setItem("carrinho", JSON.stringify(cart));
    }

    function updateCartButton() {
        const cart = getCart();
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        if (cartBtn) {
            cartBtn.innerHTML = `<i class="fas fa-shopping-cart icon"></i>Carrinho (${itemCount})`;
        }
    }

    function updateLoginButton() {
        const nomeUsuario = localStorage.getItem("usuarioLogado");
        if (nomeUsuario && loginBtn) {
            loginBtn.innerHTML = `<i class="fas fa-user icon"></i>${JSON.parse(nomeUsuario)}`;
            loginBtn.href = "#";
            loginBtn.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("usuarioLogado");
                showToast("Logout realizado com sucesso!");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            });
        }
    }

    function calculateCartTotal() {
        const cart = getCart();
        return cart.reduce((total, item) => {
            const price = parsePrice(item.price);
            return total + price * item.quantity;
        }, 0).toFixed(2);
    }

    function addToCart(product) {
        const cart = getCart();
        const existingItem = cart.find(item => item.title === product.title);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        saveCart(cart);
        updateCartButton();
        showToast(`"${product.title}" adicionado ao carrinho!`);
    }

    function showToast(message) {
        const toast = document.createElement("div");
        toast.className = "toast show";
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 1800);
    }

    if (cartBtn) {
        if (!cartBtn.dataset.initialized) {
            cartBtn.href = "../carrinho/carrinho.html";
            cartBtn.dataset.initialized = "true"; 
        }
        updateCartButton();
    }

    updateLoginButton();

    window.addToCart = addToCart;
    window.updateCartButton = updateCartButton;
});