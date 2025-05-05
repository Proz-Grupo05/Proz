document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("carrinho")) || [];
    const orderItemsContainer = document.getElementById("order-items");
    const orderTotalValue = document.getElementById("order-total-value");
    const finalizeButton = document.getElementById("finalizeButton");
    
    function formatPrice(price) {
      return `R$ ${price.toFixed(2).replace('.', ',')}`;
    }
    
    function renderCartItems() {
      if (cart.length === 0) {
        orderItemsContainer.innerHTML = "<p>Seu carrinho está vazio.</p>";
        orderTotalValue.textContent = "R$ 0,00";
        return;
      }
      
      let totalPrice = 0;
      orderItemsContainer.innerHTML = "";
      
      cart.forEach(item => {
        const price = parseFloat(item.price.replace('R$', '').replace(',', '.').trim());
        const itemTotal = price * item.quantity;
        totalPrice += itemTotal;
        
        const itemElement = document.createElement("div");
        itemElement.className = "order-item";
        itemElement.innerHTML = `
          <div class="item-info">
            <p>${item.title} (${item.quantity}x)</p>
          </div>
          <div class="item-price">
            <p>${formatPrice(itemTotal)}</p>
          </div>
        `;
        
        orderItemsContainer.appendChild(itemElement);
      });
      
      orderTotalValue.textContent = formatPrice(totalPrice);
    }
    
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    const cardDetails = document.getElementById("cardDetails");
    const pixDetails = document.getElementById("pixDetails");
    
    paymentMethods.forEach(method => {
      method.addEventListener("change", () => {
        if (method.value === "creditCard" || method.value === "debitCard") {
          cardDetails.style.display = "block";
          pixDetails.style.display = "none";
        } else if (method.value === "pix") {
          cardDetails.style.display = "none";
          pixDetails.style.display = "block";
        }
      });
    });
    
    const cepInput = document.getElementById("cep");
    if (cepInput) {
      cepInput.addEventListener("blur", () => {
        const cep = cepInput.value.replace(/\D/g, '');
        
        if (cep.length === 8) {
          document.getElementById("street").value = "Rua Exemplo";
          document.getElementById("neighborhood").value = "Bairro Exemplo";
          document.getElementById("city").value = "Cidade Exemplo";
          document.getElementById("state").value = "SC";
        }
      });
    }
    
    function showToast(message) {
      const toast = document.createElement("div");
      toast.className = "toast show";
      toast.textContent = message;
      toast.style.position = "fixed";
      toast.style.bottom = "20px";
      toast.style.right = "20px";
      toast.style.backgroundColor = "#29482a";
      toast.style.color = "white";
      toast.style.padding = "15px 25px";
      toast.style.borderRadius = "5px";
      toast.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
      toast.style.zIndex = "1000";
      
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.5s ease";
        
        setTimeout(() => {
          toast.remove();
        }, 500);
      }, 3000);
    }
    
    function validateForm() {
      const addressForm = document.getElementById("addressForm");
      const requiredFields = addressForm.querySelectorAll("[required]");
      
      for (const field of requiredFields) {
        if (!field.value.trim()) {
          showToast(`Campo ${field.name} é obrigatório`);
          field.focus();
          return false;
        }
      }
      
      const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
      
      if (selectedMethod === "creditCard" || selectedMethod === "debitCard") {
        const cardNumber = document.getElementById("cardNumber").value;
        const cardName = document.getElementById("cardName").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;
        
        if (!cardNumber || !cardName || !expiryDate || !cvv) {
          showToast("Preencha todos os dados do cartão");
          return false;
        }
      }
      
      if (cart.length === 0) {
        showToast("Seu carrinho está vazio");
        return false;
      }
      
      return true;
    }
    
    if (finalizeButton) {
      finalizeButton.addEventListener("click", () => {
        if (validateForm()) {
          finalizeButton.disabled = true;
          finalizeButton.textContent = "Processando...";
          
          setTimeout(() => {
            localStorage.removeItem("carrinho");
            
            showToast("Compra finalizada com sucesso!");
            
            setTimeout(() => {
              window.location.href = "../home/home.html";
            }, 2000);
          }, 1500);
        }
      });
    }
    
    if (cepInput) {
      cepInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 5) {
          value = value.substring(0, 5) + '-' + value.substring(5, 8);
        }
        e.target.value = value;
      });
    }
    
    const cardNumberInput = document.getElementById("cardNumber");
    if (cardNumberInput) {
      cardNumberInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
          value = value.match(/.{1,4}/g).join(' ');
        }
        e.target.value = value;
      });
    }
    
    const expiryDateInput = document.getElementById("expiryDate");
    if (expiryDateInput) {
      expiryDateInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
          value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
      });
    }
    
    renderCartItems();
  });