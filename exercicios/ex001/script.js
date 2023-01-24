function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 18//data.getHours()
    var minuto = data.getMinutes()  
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.` 
    if (hora >= 0 && hora < 12) {
        // Bom Dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#a7f5f5'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde 
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#fed501'
    } else{
        // Boa Noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1475D0' 
    } 
}

