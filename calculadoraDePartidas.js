

function calcularNivel(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    switch (true) {
        case saldoVitorias < 10:
            nivel = 'Ferro'
            break

        case saldoVitorias >= 10 && vitorias <= 20:
            nivel = 'Bronze'
            break

        case saldoVitorias >= 21 && vitorias <= 50:
            nivel = 'Prata'
            break

        case saldoVitorias >= 51 && vitorias <= 80:
            nivel = 'Ouro'
            break

        case saldoVitorias >= 81 && vitorias <= 90:
            nivel = 'Diamante'
            break

        case saldoVitorias >= 91 && vitorias <= 100:
            nivel = 'Lendário'
            break;

        case saldoVitorias >= 101:
            nivel = 'Imortal'
            break

        default:
            nivel = 'Nível não determinado'
            break
    }

    
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

const vitorias = 102;
const derrotas = 1;

const resultado = calcularNivel(vitorias, derrotas);
console.log(resultado);

