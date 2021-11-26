function soundPlay(e){
  const sound=document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!sound) return;
  key.classList.add('playing');
  sound.play();
}

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keyup',soundPlay)


