document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const erroEmail = document.getElementById("erro-email");
    const erroSenha = document.getElementById("erro-senha");
    const btnEsqueciSenha = document.getElementById("esqueci-senha");

    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
        mostrarToast(`Você já está logado como ${JSON.parse(usuarioLogado)}`);
        setTimeout(() => {
            window.location.href = "../home/home.html";
        }, 1800);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailValido = validarEmail();
        const senhaValida = validarSenha();

        if (emailValido && senhaValida) {
            const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            const usuario = usuarios.find(u => u.email === email.value.trim() && u.senha === senha.value.trim());

            if (usuario) {
                localStorage.setItem("usuarioLogado", JSON.stringify(usuario.nome));
                mostrarToast("Login realizado com sucesso!");
                setTimeout(() => {
                    window.location.href = "../home/home.html";
                }, 1800);
            } else {
                aplicarErro(email, erroEmail, "Usuário ou senha inválidos.");
                aplicarErro(senha, erroSenha, "");
            }
        }
    });

    btnEsqueciSenha?.addEventListener("click", (e) => {
        e.preventDefault();
        const emailDigitado = email.value.trim();
        if (!emailDigitado) {
            mostrarToast("Por favor, digite seu e-mail para recuperar a senha.");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuario = usuarios.find(u => u.email === emailDigitado);

        if (usuario) {
            mostrarToast(`Sua senha cadastrada é: "${usuario.senha}"`);
        } else {
            mostrarToast("E-mail não encontrado. Verifique e tente novamente.");
        }
    });

    function validarEmail() {
        const valor = email.value.trim();
        if (!valor) {
            aplicarErro(email, erroEmail, "O e-mail é obrigatório.");
            return false;
        }
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!padraoEmail.test(valor)) {
            aplicarErro(email, erroEmail, "Informe um e-mail válido.");
            return false;
        }
        aplicarSucesso(email, erroEmail);
        return true;
    }

    function validarSenha() {
        const valor = senha.value.trim();
        if (!valor) {
            aplicarErro(senha, erroSenha, "A senha é obrigatória.");
            return false;
        }
        if (valor.length < 6) {
            aplicarErro(senha, erroSenha, "A senha deve ter pelo menos 6 caracteres.");
            return false;
        }
        aplicarSucesso(senha, erroSenha);
        return true;
    }

    function aplicarErro(campo, spanErro, mensagem) {
        campo.classList.remove("input-valid");
        campo.classList.add("input-error");
        spanErro.textContent = mensagem;
    }

    function aplicarSucesso(campo, spanErro) {
        campo.classList.remove("input-error");
        campo.classList.add("input-valid");
        spanErro.textContent = "";
    }

    function mostrarToast(mensagem) {
        const toast = document.getElementById("toast");
        toast.textContent = mensagem;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 1800);
    }
});