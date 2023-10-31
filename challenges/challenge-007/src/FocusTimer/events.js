import { controls, soundSelector } from "./elements.js"
import * as actions from "./actions.js"

export function registerControls() {
    controls.addEventListener('click', (event) => {
      console.log('event')
      const action = event.target.dataset.action
      if (typeof actions[action] != "function") {
        return
      }
      
      actions[action]()
      console.log('click')
    })
}

export function registerSounds() {
  console.log('event')  
  soundSelector.addEventListener('click', (event) => {
        const action = event.target.dataset.sound
        if (typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
}