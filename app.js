function aparecer(){

    let div = document.getElementById("armazenamento")
    div.style.visibility = 'visible'

    let video = document.getElementById("passinho")
    video.play()


}

function desaparecer(){

    let div = document.getElementById("armazenamento")
    div.style.visibility = 'hidden'

    let audio = document.getElementById("goku")
    let video = document.getElementById("passinho")
    video.pause()
}
