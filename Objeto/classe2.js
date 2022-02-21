class Avo {
    constructor(sobronome) {
        this.sobronome = sobronome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome)
        this.profisao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)