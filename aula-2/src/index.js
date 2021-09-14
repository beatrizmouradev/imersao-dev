/**
  * função que pega os dados do input e retorna o valor
  * return string
  */
function takeInput() {
}


/**
  * função que recebe o valor do input e converte em 4 moedas
  * return string
  */
function converter(inputRealValue) {
    const dollar = 0.20
    const converterToDollar = (inputRealValue * dollar).toFixed(1)

    const eur = 0.16
    const converterToEur = (inputRealValue * eur).toFixed(1)

    const pound = 0.14
    const converterToPound = (inputRealValue * pound).toFixed(1)

    const bitcoin = 0.0000041
    const converterToBitcoin = (inputRealValue * bitcoin).toFixed(5)

    return { converterToBitcoin, converterToDollar, converterToEur, converterToPound }
}

/**
  * //função que ouve um evento de click e chama função para preencher a label.
  */
function converterButton() {
    const button = document.getElementById("button")
    button.addEventListener("click", showResult)
}

/**
  * função que pega a média que foi calculada e mostra resultado em uma a label.

  */
function showResult() {
    const inputReal = document.querySelector(".input-real")
    const erros = validaInput(inputReal.value)
    console.log('erros', erros)
    if (erros.length > 0) {
      const messageElm = document.querySelector(".header__error");
      messageElm.innerHTML = erros.join('<br>')
      return
    }

    const inputFloatValue = parseFloat(inputReal.value)
    const converterMoney = converter(inputFloatValue)

    console.log(converterMoney)
    var labelDollar = document.querySelector(".dollar")
    labelDollar.textContent = converterMoney.converterToDollar //textContent serve pra label e pra input é o value
    console.log(labelDollar)

    var labelEur = document.querySelector(".eur")
    labelEur.textContent = converterMoney.converterToEur

    var labelPound = document.querySelector(".pound")
    labelPound.textContent = converterMoney.converterToPound

    var labelBitcoin = document.querySelector(".bitcoin")
    labelBitcoin.textContent = converterMoney.converterToBitcoin

}

document.addEventListener("DOMContentLoaded", converterButton, false); //faz com que quando o DOM carregar, o navegador passa a escutar o butão.
 

function validaInput(inputRealValue) {
  const erros = [];

  if (inputRealValue.length === 0){
    erros.push("Digite um valor")
  }

  if (isNaN(inputRealValue)){
    erros.push("Esse valor não é um número, digite um valor válido")
  }

  if (Number(inputRealValue) < 0)
    erros.push('Digite um número maior que 0')
    
  if (Number(inputRealValue) < -20)
    erros.push('Digite um número maior que -20')

  return erros;
}

