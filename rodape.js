// Seleciona o formulário e os campos
const newsletterForm = document.querySelector('.newsletter-inputs-container');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('nome');

// Adiciona ouvintes de evento para validação ao perder o foco
nameInput.addEventListener('blur', () => {
  const nameError = document.getElementById('name-error');
  if (!validateName(nameInput.value)) {
    nameError.textContent = 'Insira um nome com mais de 2 caracteres';
    nameInput.classList.add('input-error');
    nameInput.classList.remove('input-valid');
  } else {
    nameError.textContent = '';
    nameInput.classList.add('input-valid');
    nameInput.classList.remove('input-error');
  }
});

emailInput.addEventListener('blur', () => {
  const emailError = document.getElementById('email-error');
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Insira um email válido';
    emailInput.classList.add('input-error');
    emailInput.classList.remove('input-valid');
  } else {
    emailError.textContent = '';
    emailInput.classList.add('input-valid');
    emailInput.classList.remove('input-error');
  }
});

phoneInput.addEventListener('blur', () => {
  const phoneError = document.getElementById('phone-error');
  if (phoneInput.value.trim() !== '' && !validatePhone(phoneInput.value)) {
    phoneError.textContent = 'Insira um telefone válido, use o padrão: (xx) xxxxx-xxxx';
    phoneInput.classList.add('input-error');
    phoneInput.classList.remove('input-valid');
  } else {
    phoneError.textContent = '';
    phoneInput.classList.add('input-valid');
    phoneInput.classList.remove('input-error');
  }
});

// Função para validar o nome
function validateName(name) {
  return name.trim().length >= 3;
}

// Função para validar o email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para validar o telefone
function validatePhone(phone) {
  const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  return phoneRegex.test(phone);
}