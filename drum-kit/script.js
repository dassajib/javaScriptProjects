window.addEventListener('keydown', function(e) {
    // get audio element with data key value
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // if any key has no value then return
    if(!audio) return 
    // make current time 0 for double tap a key and execute
    audio.currentTime = 0
    audio.play()
    // for adding press style
    key.classList.add('playing')
})

// remove press style after specific time
function removeFunction(e) {
    if(e.propertyName !== 'transform') return 
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');

// to get specific class that is pressed
keys.forEach(key => key.addEventListener('transitionend', removeFunction))