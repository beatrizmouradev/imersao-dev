/**
  * função que pega os dados do input e retorna os values
  * retorna string
  */
function takeInput() {
    const firstGradeInput = document.querySelector(".first-grade")
    const firstGradeValue = parseFloat(firstGradeInput.value)

    const secondGradeInput = document.querySelector(".second-grade")
    const secondGradeValue = parseFloat(secondGradeInput.value)

    const thirdGradeInput = document.querySelector(".third-grade")
    const thirdGradeValue = parseFloat(thirdGradeInput.value)

    const fourthGradeInput = document.querySelector(".fourth-grade")
    const fourthGradeValue = parseFloat(fourthGradeInput.value)

    const average = averageCalculator(firstGradeValue, secondGradeValue, thirdGradeValue, fourthGradeValue)

    return average
}

/**
 * função que recebe quatro valores e retorna a média
 * @param {string} firstGradeValue 
 * @param {string} secondGradeValue 
 * @param {string} thirdGradeValue 
 * @param {string} fourthGradeValue 
 * @returns {string}
 */
function averageCalculator(firstGradeValue, secondGradeValue, thirdGradeValue, fourthGradeValue) {
    const average = (firstGradeValue + secondGradeValue + thirdGradeValue + fourthGradeValue) / 4

    return average.toFixed(1)
}


/**
  * //função que ouve um evento de click e chama função para preencher label.
  */
function calculateButton() {
    const button = document.getElementById("button")
    button.addEventListener("click", showResult)
}

/**
  * função que pega a média que foi calculada e mostra resultado em uma label.

  */
function showResult () {
    var label = document.querySelector(".form__label")
    label.textContent = takeInput()
}

document.addEventListener("DOMContentLoaded", calculateButton, false); //faz com que quando o DOM carregar, o navegador passa a escutar o butão.

//função que valida os campos e faz mensagem de erro.

//função que limpa os inputs após ser calculada a média