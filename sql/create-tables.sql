-- 1. CATEGORIA
CREATE TABLE categoria (
    id_categoria SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(100) NOT NULL
);

-- 2. PRODUTO
CREATE TABLE produto (
    id_produto SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco NUMERIC(10,2) NOT NULL,
    marca VARCHAR(100),
    imgsrc TEXT,
    imgalt TEXT,
    id_categoria INT NOT NULL,
    CONSTRAINT fk_produto_categoria FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

-- 3. CONTA
CREATE TABLE conta (
    id_conta SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

-- 4. ENVIO
CREATE TABLE envio (
    id_envio SERIAL PRIMARY KEY,
    cep VARCHAR(9) NOT NULL,
    rua VARCHAR(100),
    numero VARCHAR(10),
    complemento VARCHAR(100),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    estado VARCHAR(2)
);

-- 5. PEDIDO
CREATE TABLE pedido (
    id_pedido SERIAL PRIMARY KEY,
    id_conta INT NOT NULL,
    id_envio INT NOT NULL,
    forma_pagamento VARCHAR(50),
    status VARCHAR(50),
    valor_total NUMERIC(10,2),
    data_pedido DATE,
    numero_cartao VARCHAR(20),
    nome_cartao VARCHAR(100),
    data_validade DATE,
    cvv VARCHAR(5),
    CONSTRAINT fk_pedido_conta FOREIGN KEY (id_conta) REFERENCES conta(id_conta),
    CONSTRAINT fk_pedido_envio FOREIGN KEY (id_envio) REFERENCES envio(id_envio)
);

-- 6. PEDIDO_PRODUTO
CREATE TABLE pedido_produto (
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario NUMERIC(10,2) NOT NULL,
    PRIMARY KEY (id_pedido, id_produto),
    CONSTRAINT fk_pp_pedido FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
    CONSTRAINT fk_pp_produto FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);