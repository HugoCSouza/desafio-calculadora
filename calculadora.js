function calculadoraRankeada(vitorias, derrotas) {
    saldo = vitorias - derrotas
    switch (true) {
        case saldo <= 10:
            nivel = 'Ferro'
            break
        case saldo > 10 && saldo <= 20:
            nivel = 'Bronze'
            break
        case saldo > 20 && saldo <= 50:
            nivel = 'Prata'
            break
        case saldo > 50 && saldo <= 80:
            nivel = 'Ouro'
            break
        case saldo > 80 && saldo <= 90:
            nivel = 'Diamante'
            break
        case saldo > 90 && saldo <= 100:
            nivel = 'Lendário'
            break
        case saldo > 100:
            nivel = 'Radiante'
            break
        default:
            nivel = 'Não encontrado'
    }
    
    return [saldo, nivel]

}

let vitorias = 10
let derrotas = 5
let impressao= calculadoraRankeada(vitorias, derrotas)

console.log('O Herói tem de saldo de ' + impressao[0]  + ' vitórias e está no nível de ' + impressao[1] )

