-- 1. CATEGORIA
INSERT INTO categoria (nome_categoria) VALUES 
('PADARIA'),
('CARNES'),
('BEBIDAS'),
('HIGIENE'),
('LIMPEZA'),
('HORTIFRUTI');

SELECT * FROM categoria;

-- 2. PRODUTO
INSERT INTO produto (nome, preco, marca, imgsrc, imgalt, id_categoria) VALUES
('Pão francês', 12.89, NULL, '../../../assets/pao-frances.jpg', 'Pão Francês', 1),
('Acém bovino', 32.99, NULL, '../../../assets/acem-bovino.jpeg', 'Acém bovino', 2),
('Arroz Branco Tipo 1 Tio Urbano (2kg)', 15.57, 'Tio Urbano', '../../../assets/arroz-branco-tipo-1-tio-urbano-pacote-2kg.png', 'Arroz Branco Tipo 1 Tio Urbano (2kg)', 1),
('Cerveja Itaipava lata 550ml', 5.99, 'Itaipava', '../../../assets/itaipava-lata-550ml.png', 'Cerveja Itaipava lata 550ml', 3),
('Kit Dove Reconstrução Shampoo 350ml + Condicionador 175ml', 19.99, 'Dove', '../../../assets/Kit Promocional Shampoo 350ml + Condicionador 175ml Dove Reconstrução + Queratina Preço Especial.png', 'Kit Dove Reconstrução Shampoo 350ml + Condicionador 175ml', 4),
('Sabão Líquido Lavagem Perfeita Omo Galão 3L Lavagem Perfeita', 44.90, 'Omo', '../../../assets/Sabão Líquido Lavagem Perfeita Omo Galão 3Lt Lavagem Perfeita.jpg', 'Sabão Líquido Lavagem Perfeita Omo Galão 3Lt Lavagem Perfeita', 5),
('Azeite Espanhol Extra Virgem Borges Vd 500ml', 49.90, 'Borges', '../../../assets/Azeite Espanhol Extra Virgem Borges Vd 500ml.jpg', 'Azeite Espanhol Extra Virgem Borges Vd 500ml', 1),
('Massa de Arroz Zero Gluten Urbano 500g Pena', 4.99, 'Urbano', '../../../assets/Massa de Arroz Zero Gluten Urbano 500g Pena.jpg', 'Massa de Arroz Zero Gluten Urbano 500g Pena', 1),
('Requeijão Cremoso Tradicional Vigor 200g', 10.90, 'Vigor', '../../../assets/Requeijão Cremoso Tradicional Vigor 200g.jpg', 'Requeijão Cremoso Tradicional Vigor 200g', 1),
('Creme Dental Colgate Tripla Ação 90g', 6.89, 'Colgate', '../../../assets/Creme Dental Tripla Ação Colgate 90g Original.png', 'Creme Dental Colgate Tripla Ação 90g', 4);

SELECT * FROM produto;

-- 3. CONTA
INSERT INTO conta (nome, email, senha) VALUES
('Ana Silva', 'ana.silva@email.com', 'senha123'),
('Bruno Souza', 'bruno.souza@email.com', 'abc12345'),
('Carlos Lima', 'carlos.lima@email.com', 'minhasenha'),
('Daniela Costa', 'daniela.costa@email.com', 'senha@2024'),
('Eduardo Rocha', 'eduardo.rocha@email.com', 'pass4567'),
('Fernanda Alves', 'fernanda.alves@email.com', '123senha'),
('Gabriel Martins', 'gabriel.martins@email.com', 'qwerty987'),
('Helena Ribeiro', 'helena.ribeiro@email.com', 'segredo321'),
('Igor Fernandes', 'igor.fernandes@email.com', 'senha@igor'),
('Julia Mendes', 'julia.mendes@email.com', 'julinha2024');

SELECT * FROM conta;

-- 4. ENVIO
INSERT INTO envio (cep, rua, numero, complemento, bairro, cidade, estado) VALUES
('01001-000', 'Praça da Sé', '100', 'Apto 101', 'Sé', 'São Paulo', 'SP'),
('20040-010', 'Rua da Quitanda', '85', NULL, 'Centro', 'Rio de Janeiro', 'RJ'),
('30140-071', 'Av. Afonso Pena', '1200', 'Sala 301', 'Centro', 'Belo Horizonte', 'MG'),
('70040-010', 'Esplanada dos Ministérios', '4', NULL, 'Zona Cívico-Administrativa', 'Brasília', 'DF'),
('80010-000', 'Rua XV de Novembro', '456', 'Loja 12', 'Centro', 'Curitiba', 'PR'),
('40015-010', 'Rua Chile', '23', NULL, 'Comércio', 'Salvador', 'BA'),
('60060-000', 'Av. Beira Mar', '1500', 'Cobertura', 'Meireles', 'Fortaleza', 'CE'),
('69005-070', 'Rua José Clemente', '299', NULL, 'Centro', 'Manaus', 'AM'),
('88015-700', 'Rua Felipe Schmidt', '730', 'Apto 202', 'Centro', 'Florianópolis', 'SC'),
('64000-000', 'Av. Frei Serafim', '1122', NULL, 'Centro', 'Teresina', 'PI');

SELECT * FROM envio;

-- 5. PEDIDO
INSERT INTO pedido (id_conta, id_envio, forma_pagamento, status, valor_total, data_pedido, numero_cartao, nome_cartao, data_validade, cvv) 
VALUES
(1, 1, 'Cartão de Crédito', 'Pendente', 120.50, CURRENT_DATE - INTERVAL '5 days', '1234 5678 9876 5432', 'João Silva', '2025-12-01', '123'),
(2, 2, 'Boleto', 'Pago', 85.30, CURRENT_DATE - INTERVAL '3 days', NULL, NULL, NULL, NULL),
(3, 3, 'PIX', 'Pago', 75.00, CURRENT_DATE - INTERVAL '1 day', NULL, NULL, NULL, NULL),
(4, 4, 'Cartão de Débito', 'Pendente', 150.00, CURRENT_DATE, '9876 5432 1234 5678', 'Maria Oliveira', '2026-01-15', '456'),
(5, 5, 'Cartão de Crédito', 'Pago', 200.99, CURRENT_DATE - INTERVAL '7 days', '1111 2222 3333 4444', 'Carlos Souza', '2024-11-30', '789');

SELECT * FROM pedido;

-- 6. PEDIDO_PRODUTO
INSERT INTO pedido_produto (id_pedido, id_produto, quantidade) VALUES
(7, 3, 2),  -- Pedido 1, Produto 3, 2 unidades
(8, 1, 1),  -- Pedido 1, Produto 1, 1 unidade
(9, 4, 6),  -- Pedido 2, Produto 4, 6 unidades
(10, 7, 1),  -- Pedido 2, Produto 7, 1 unidade
(11, 2, 3)  -- Pedido 3, Produto 2, 3 unidades

SELECT * from pedido_produto;
