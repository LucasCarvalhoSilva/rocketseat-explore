const card1 = document.querySelector(".card-fortune-cookie")
const card2 = document.querySelector(".card-opened-cookie")
const fortuneCookie = document.querySelector(".fortune-cookie-img")
const btnNewTry = document.querySelector(".btn-new-try")

fortuneCookie.addEventListener('click', toogleScreen)

btnNewTry.addEventListener('click', toogleScreen)


function toogleScreen() {
  card1.classList.toggle("hide")
  card2.classList.toggle("hide")
}

