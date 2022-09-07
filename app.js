function aparecer(){

    let div = document.getElementById("armazenamento")
    div.style.visibility = 'visible'

    let video = document.getElementById("passinho")
    video.play()
    document.body.style.backgroundImage = "url('maxresdefault.jpg')"
    setTimeout(seumadruga=>{
        div.style.visibility = 'hidden'

    },82000)


}

function desaparecer(){

    let div = document.getElementById("armazenamento")
    div.style.visibility = 'hidden'

    let audio = document.getElementById("goku")
    let video = document.getElementById("passinho")
    passinho.currentTime = 0
    video.pause()
    setTimeout(massa=>{

        document.body.style.backgroundImage = "url('Screenshot_32.png')"

    },5000)
}

