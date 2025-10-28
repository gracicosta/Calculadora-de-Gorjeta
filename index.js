function trocaNome(valor) {
    if (valor == 1) {
        return valor + " pessoa";
    } else {
        return valor + " pessoas";
    }
}

function conta() {

    // Variaveis

    let conta = parseFloat(document.getElementById('contaTotal').value) || 0

    let gorjeta = parseInt(document.getElementById('gorjeta').value) || 0

    let pessoas = parseInt(document.getElementById('dividirPorPessoa').value) || 1

    // conta
    let valorGorjeta = conta * (gorjeta / 100)
    let total = conta + valorGorjeta
    let dividirPorPessoa = total / pessoas
    let valorArredondado = Math.ceil(dividirPorPessoa * 100) / 100

    document.getElementById('gorjetaPorcentagem').textContent = `${gorjeta}%`
    document.getElementById('totalConta').textContent = `R$ ${total.toFixed(2)}`
    document.getElementById('faturarCada').textContent = `R$ ${valorArredondado.toFixed(2)}`
    document.getElementById('qtdPessoas').textContent = `${trocaNome(pessoas)}`
}

function reset() {
    document.getElementById('dividirPorPessoa').value = ''
    document.getElementById('contaTotal').value = ''
    document.getElementById('totalConta').textContent = `R$ 0.00`
    document.getElementById('faturarCada').textContent = `R$ 0.00`
}