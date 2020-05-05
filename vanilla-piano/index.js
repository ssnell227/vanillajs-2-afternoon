window.addEventListener('keypress', (e) => {
    let tone = document.querySelector(`audio[data-key='${e.keyCode}']`)
    if (!tone) return
    let pianoKey = document.querySelector(`polygon[data-key='${e.keyCode}']`)
    tone.currentTime = 0;
    pianoKey.classList.add('pressed')
    tone.play()
    setTimeout(() => {
        pianoKey.classList.remove('pressed')
    }, 300)
})

