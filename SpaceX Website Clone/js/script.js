const btn = document.querySelector('#menu-btn')
const overlay = document.querySelector('#overlay')

btn.addEventListener('click', navToggle)
function navToggle(){
  btn.classList.toggle('open')
  overlay.classList.toggle('overlay-show')
  document.body.classList.toggle('stop-scrolling')
}