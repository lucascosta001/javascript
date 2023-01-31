function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let pas = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

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