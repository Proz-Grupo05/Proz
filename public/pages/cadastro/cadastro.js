document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");
    const usuario = document.getElementById("usuario");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    const erroUsuario = document.getElementById("erro-usuario");
    const erroEmail = document.getElementById("erro-email");
    const erroSenha = document.getElementById("erro-senha");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const usuarioValido = validarUsuario();
        const emailValido = validarEmail();
        const senhaValida = validarSenha();

        if (usuarioValido && emailValido && senhaValida) {
            const novoUsuario = {
                nome: usuario.value.trim(),
                email: email.value.trim(),
                senha: senha.value.trim()
            };

            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            usuarios.push(novoUsuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            mostrarToast("Cadastro realizado com sucesso!");

            setTimeout(() => {
                window.location.href = "../login/login.html";
            }, 2000);
        }
    });

    function validarUsuario() {
        const valor = usuario.value.trim();
        if (valor.length < 3) {
            aplicarErro(usuario, erroUsuario, "O nome deve ter no mínimo 3 caracteres.");
            return false;
        }
        aplicarSucesso(usuario, erroUsuario);
        return true;
    }

    function validarEmail() {
        const valor = email.value.trim();
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
        const toast = document.createElement("div");
        toast.className = "toast show";
        toast.textContent = mensagem;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 1800);
    }
});
