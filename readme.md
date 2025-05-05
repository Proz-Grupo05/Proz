
# 📦 Documentação Entrega Sprint IV - Implementação de JavaScript

## 📚 Sumário

- [HOME](#home)
  - [Commit 1: Validação dinâmica do formulário de newsletter](#commit-1-validação-dinâmica-do-formulário-de-newsletter)
  - [Commit 2: Implementação dinâmica de cards (produtos, categorias, marcas)](#commit-2-implementação-dinâmica-de-cards-produtos-categorias-marcas)
    - [1. Produtos em Promoção (`products-on-sale`)](#1-produtos-em-promoção-products-on-sale)
    - [2. Categorias](#2-categorias)
    - [3. Marcas](#3-marcas)
- [Cadastro](#cadastro)
  - [Commit 1: Validação dinâmica do formulário de Cadastro]
  (#commit-1-validação-dinâmica-do-formulário)
---

## 🏠 HOME

### ✅ Commit 1: Validação dinâmica do formulário de newsletter

**Descrição:**

Implementada validação dinâmica para os campos do formulário de newsletter no rodapé, com feedback visual e mensagens de erro.

**Alterações principais:**

- Inclusão de `<span>` para mensagens de erro nos campos de nome, email e telefone.
- Criação de classes CSS:
  - `.input-error` para campos inválidos.
  - `.input-valid` para campos válidos.
- Lógica JS para adicionar/remover classes com base na validação.

**Regras de Validação:**

| Campo    | Regra                                                                 |
|----------|-----------------------------------------------------------------------|
| Nome     | Mínimo de 3 caracteres                                                |
| Email    | Deve seguir o padrão `exemplo@dominio.com`                           |
| Telefone | Opcional, mas se preenchido, deve seguir o formato `(xx) xxxxx-xxxx` |

---

### ✅ Commit 2: Implementação dinâmica de cards (produtos, categorias, marcas)

**Descrição:**

Refatoração da página para gerar os cards dinamicamente com JavaScript, utilizando dados contidos em arrays de objetos. Essa abordagem facilita a manutenção e a escalabilidade da aplicação.

---

### 1. Produtos em Promoção (`products-on-sale`)

#### 🔹 Exemplo do Array de Produtos

```javascript
const products = [
  {
    title: "Pão Francês",
    price: "R$12,89 / kg",
    imgSrc: "../../../assets/pao-frances.jpg",
    imgAlt: "Pão Francês"
  },
  {
    title: "Acém Bovino",
    price: "R$32,99 / kg",
    imgSrc: "../../../assets/acem-bovino.jpeg",
    imgAlt: "Acém Bovino"
  },
  // Outros produtos...
];
```

---

### 2. Categorias

#### 🔹 Exemplo do Array de Categorias

```javascript
const categories = [
  {
    name: "Padaria",
    img: "../../../assets/padaria.svg"
  },
  {
    name: "Carnes",
    img: "../../../assets/carnes.svg"
  },
  // Outras categorias...
];
```

---

### 3. Marcas

#### 🔹 Exemplo do Array de Marcas

```javascript
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
  // Outras marcas...
];
```
