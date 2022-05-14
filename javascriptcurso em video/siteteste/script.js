function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora}horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src ='images/ManhaRedondo.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src ='images/Tarderedondo.png'
        document.body.style.background ='#b9846f'
    }else{
        //Boa Noite
        img.src = 'images/noiteRedondo.png'
        document.body.style.background ='#515154'
    }
}