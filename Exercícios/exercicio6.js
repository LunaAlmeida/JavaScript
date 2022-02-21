function jurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicacao) {

    let juros = capitalInicial * taxaDeJuros * tempoDeAplicacao

    montante = capitalInicial + juros

    console.log(`R$ ${montante.toFixed(2).toString().replace(".", ",") }`)

}


function jurosCompostos (capitalInicial, taxaDeJuros, tempoDeAplicacao) {

    montante = capitalInicial * ((1 + taxaDeJuros) ** tempoDeAplicacao)

    console.log(`R$ ${montante.toFixed(2).toString().replace(".", ",")}`)
    
}

jurosSimples(75, 0.01, 48)

jurosCompostos(75, 0.01, 48)