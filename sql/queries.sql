SELECT
    p.id_pedido,
    pr.nome AS nome_produto,
    pp.quantidade,
    pr.preco
FROM pedido p
JOIN pedido_produto pp ON p.id_pedido = pp.id_pedido
JOIN produto pr ON pp.id_produto = pr.id_produto
ORDER BY p.id_pedido;


SELECT
    pe.id_pedido,
    c.nome AS nome_cliente,
    pr.nome AS nome_produto,
    pp.quantidade,
    pr.preco,
    pe.forma_pagamento,
    pe.status,
    e.rua || ', ' || e.numero || ' - ' || e.bairro || ', ' || e.cidade || '/' || e.estado AS endereco_envio,
    pe.data_pedido
FROM pedido pe
JOIN conta c ON pe.id_conta = c.id_conta
JOIN envio e ON pe.id_envio = e.id_envio
JOIN pedido_produto pp ON pe.id_pedido = pp.id_pedido
JOIN produto pr ON pp.id_produto = pr.id_produto
ORDER BY pe.id_pedido;
