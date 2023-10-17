// variaveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handlePressEnter)

function handlePressEnter(event) {
  if(event.key == 'Enter' && screen1.classList.contains('hide')) {
    console.log(event.key)
    handleResetClick()
  }
}

// Funções Callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    document.getElementById('btnTry').disable = true
    alert("Valor precisa estar entre 0 e 10")
  }

  if(inputNumber.value == null || inputNumber.value == "") {
    document.getElementById('btnTry').disable = true
    alert("Valor precisa estar entre 0 e 10")
  }

  if(Number(inputNumber.value) == randomNumber) {
    toogleScreen()

    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  randomNumber = Math.round(Math.random() * 10)
  toogleScreen()
  xAttempts = 1
}

function toogleScreen() {
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")
}