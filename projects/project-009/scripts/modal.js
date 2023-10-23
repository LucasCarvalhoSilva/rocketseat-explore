export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal .title .close'),

  open() {
    this.wrapper.classList.add('open')//podemos utilizar tanto o this como o Modal. sendo que nesse caso o this se refere ao objeto Modal
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.addEventListener('click', () => {
  Modal.close()
  console.log('remove')
})

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if(event.key === 'Escape') {
    Modal.close()
    console.log('cliquei no ESC') 
  }
}