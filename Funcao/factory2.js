// Factory com passagem de parâmetros

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 20199.49))
console.log(criarProduto('iPad', 1499.49))