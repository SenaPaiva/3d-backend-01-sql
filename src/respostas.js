/* Exercício 1:
  * Escreva entre as áspas da variável "r1" o comando 
  * para selecionar na tabela cliente todos os clientes 
  * que moram em Jaboatão e Olinda
  */
export const r1 = 
`SELECT nome, cidade
from clientes 
WHERE cidade in ('Jaboatão dos Guararapes', 'Olinda');`

/* Exercício 2:
  * Escreva entre as áspas da variável "r2" o comando 
  * para ordenar a tabela de produtos a partir do preço 
  * de cada item, em ordem do mais caro par ao mais barato
  */
export const r2 = 
`SELECT nome, preco
from produtos 
order by preco desc;`

/* Exercício 3:
  * Escreva entre as áspas da variável "r3" o comando 
  * para filtrar os pedidos entre os meses de Dezembro (12)
  * e Dezembro (18)
  */
export const r3 = 
`SELECT cliente_id, data_pedido, status
from pedidos 
where data_pedido between '2025-12-12' and '2025-12-18';`

/* Exercício 1:
  * Escreva entre as áspas da variável "r4" o comando 
  * para juntar informações da tabelas de produtos com
  * a tabela de itens_pedido
  */
export const r4 = ``

