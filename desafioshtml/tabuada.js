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