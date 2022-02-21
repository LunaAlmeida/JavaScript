let valor //não inicializada
console.log(valor)
//console.log(valor2)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) //Erro

const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuit undefined
//delete produto.preco
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)