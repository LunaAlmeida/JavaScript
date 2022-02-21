function dinheiro (valor) {

    let reais = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`

    console.log(reais)

}

dinheiro(1.1 + 0.44)