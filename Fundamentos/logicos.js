function compra( trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador

    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel}
}

console.log(compra(true, true))
console.log(compra(true, false))
console.log(compra(false, true))
console.log(compra(false, false))