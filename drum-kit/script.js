// taking key as a parameter
function soundPlay(e) {
    // store key sound after clicking
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    // store key div
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    // if key doesn't exsist then return
    if(!audio) {
        return;
    }
    // making key sound zero for frequently pressing and getting expecting result
    audio.currentTime = 0
    // playing stored sound
    audio.play()
    // adding class playing for showing design after click
    key.classList.add('playing')
}

// remove func
function removeFunc(e) {
    if(e.propertyName !== 'transform') {
        return 
    }
    // removing playing class
    this.classList.remove('playing')
}

// storing all key's
const keys = document.querySelectorAll('.keys')
// identifying the pressing key and add an even listener called transitionend 
keys.forEach(key => document.addEventListener('transitionend', removeFunc))

// calling function
window.addEventListener('keydown', soundPlay)


