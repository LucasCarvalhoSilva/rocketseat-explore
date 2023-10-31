import state from './state.js'
import * as timer from './timer.js'
import * as event from './events.js'


export function play(minutes, seconds) {
    console.log('play')
    state.minutes = minutes
    state.seconds = seconds

    event.registerControls()
    event.registerSounds()
    timer.updateDisplay()
}