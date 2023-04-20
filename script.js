// Verificador de Idade
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

// Contador
function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let pas = window.document.getElementById('txtp')
    let res = window.document.getElementById('rescont')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Ipossível contar!'
        // window.alert('[ERRO] Falta Dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            // Contagem Decrescente
            for(let c = i; c >= f; c -=p){
                res.innerHTML += ` ${c} \u{1f449}` 
            }  
        }
        res.innerHTML += `\u{1f3c1}`
    }
}

// Tabuada
function gerar() {
    let n = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('seltab')
    
    if (n.value.length == 0) {
        alert('Digie um número')
    } else {
        let numeros = Number(n.value)
        let c = 1
        tab.innerHTML = ''
        while (c<=10) {
            let item = document.createElement('option')
            item.text = `${numeros} x ${c} = ${numeros*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

// Calculadora
function insert(num){

    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;    

}
function clean(){

    document.getElementById('resultado').innerHTML = "";
}
function back(){

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}
function calcular(){

    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = 'nada para calular'
    }

}