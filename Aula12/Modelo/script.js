function load(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    var data = new Date()
    var hora = 15
    //var hora = data.getHours()
    msg.innerHTML = "Agora são "+hora+ " Horas"
    if(hora >= 0 && hora < 12){
        img.src = "Manha.png"
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        img.src = "Tarde.png"
        document.body.style.background = '#b9846f'
    }else{
        img.src = "Noite.png"
        document.body.style.background = '#515154'
    }
}
