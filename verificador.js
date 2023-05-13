function verificar() {
    var data = new Date() 
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#resverif')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'Foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'exercicios/ex002/fotos/criança-menino.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'exercicios/ex002/fotos/jovem-homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'exercicios/ex002/fotos/adulto-homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'exercicios/ex002/fotos/idoso-homem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'exercicios/ex002/fotos/criança-menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'exercicios/ex002/fotos/jovem-mulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'exercicios/ex002/fotos/adulta-mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'exercicios/ex002/fotos/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center' 
        res.style.padding = '8px'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}