function tratarErroELancar(erro) {
    // throw new Error('....')
    // throw 10
    // trhow true
    // trohw 'messagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function nomeGritado (obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')

        } catch (e) {
            tratarErroELancar(e)
        } finally {
            console.log('final')
        }
}

const obj = { nome: 'Luna' }
nomeGritado(obj)