import state from "./state.js";
import * as timer from './timer.js'
import * as sound from './sounds.js'
import * as el from './elements.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    console.log("toggleRunning")
    timer.countdown()
}

export function reset () {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function addFiveMinutesToTheCountdown() {
    if(state.isRunning) {
        return
    }

    state.minutes = state.minutes + 5

    timer.updateDisplay()
}

export function removeFiveMinutesToTheCountdown() {
    if(state.isRunning) {
        return
    }

    state.minutes = state.minutes - 5

    timer.updateDisplay()
}

export function playFlorest() {
    console.log(state.music)
    if(state.music = null) {
        state.music = 'florest'
        sound.florestSound.play()
        el.florest.classList.toggle('selected')
        return
    } else if(state.music != 'florest') {
        disableMusic(state.music)
        state.music = 'florest'
        el.florest.classList.toggle('selected')
        sound.florestSound.play()
        return
    }

    state.music = 'florest'
    el.florest.classList.toggle('selected')
    sound.florestSound.play()
}

export function playRain() {
    console.log(state.music)
    if(state.music = null) {
        state.music = 'rain'
        sound.florestSound.play()
        el.rain.classList.toggle('selected')
        return
    } else if(state.music != 'rain') {
        disableMusic(state.music)
        el.rain.classList.toggle('selected')
        state.music = 'rain'
        sound.rainSound.play()
        return
    }
    el.rain.classList.toggle('selected')
    state.music = 'rain'
    sound.rainSound.play()
}

export function playCoffeShop() {
    console.log(state.music)
    if(state.music = null) {
        state.music = 'coffeeShop'
        sound.coffeeShopSound.play()

        el.coffeeShop.classList.toggle('selected')
        return
    } else if(state.music != 'coffeeShop') {
        disableMusic(state.music)
        el.coffeeShop.classList.toggle('selected')
        state.music = 'coffeeShop'
        sound.coffeeShopSound.play()
        return
    }
    el.coffeeShop.classList.toggle('selected')
    state.music = 'coffeeShop'
    sound.coffeeShopSound.play()
}

export function playFireplace() {
    console.log(state.music)
    if(state.music = null) {
        state.music = 'fireplace'

        el.fireplace.classList.toggle('selected')
        sound.coffeeShopSound.play()
        return
    } else if(state.music != 'coffeeShop') {
        disableMusic(state.music)
        el.fireplace.classList.toggle('selected')
        state.music = 'fireplace'
        sound.firePlaceSound.play()
        return
    }
    el.fireplace.classList.toggle('selected')
    state.music = 'fireplace'
    sound.firePlaceSound.play()
}

function disableMusic(music) {
    switch(music){
        case 'florest':
            sound.florestSound.pause()
            el.fireplace.classList.toggle('selected')
            break
        case 'fireplaceSound':
            sound.firePlaceSound.pause()
            el.fireplace.classList.toggle('selected')
            break
        case 'coffeeShop':
            sound.coffeeShopSound.pause()
            el.fireplace.classList.toggle('selected')
            break
        case 'rain':
            sound.rainSound.pause()
            el.fireplace.classList.toggle('selected')
            break
    }
}