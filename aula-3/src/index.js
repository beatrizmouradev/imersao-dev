let numeroSecreto = null
let numeroTentativas = null

function iniciarPartida() {
    numeroSecreto = parseInt(Math.random() * 11)
    numeroTentativas = 1
    console.log('🎉 jogando novamente..., o segredo agora é', numeroSecreto)
}

function advinha() {
    const elementoResultado = document.getElementById("resultado")
    const elementoMensagemResultado = document.getElementById("mensagemResultado")

    if (numeroTentativas === 4) {
        elementoResultado.innerHTML = "Você errou!"
        elementoMensagemResultado.innerHTML = "O número secreto era " + numeroSecreto + " seu número de tentativas acabaram. Vamos jogar novamente?"
        return iniciarPartida()
    } 
    
    const chute = parseInt(document.getElementById("chute").value)

    if (chute === numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou!"
        elementoMensagemResultado.innerHTML = "Parabéns! O número secreto era " + numeroSecreto + '. Vamos jogar novamente?'
        return iniciarPartida()
    } else if (chute < 0 || chute > 10) {
        elementoResultado.innerHTML = "Você errou!"
        elementoMensagemResultado.innerHTML = "Você deve digitar um número entre 0 a 10. Tente novamente!"
    } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "Você errou!"
        elementoMensagemResultado.innerHTML = "O número secreto é maior. Tente novamente!"
    } else {
        elementoResultado.innerHTML = "Você errou!"
        elementoMensagemResultado.innerHTML = "O número secreto é menor. Tente novamente!"
    }
    numeroTentativas++
}

iniciarPartida()