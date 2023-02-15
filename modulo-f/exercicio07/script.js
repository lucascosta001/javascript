var num = window.document.getElementById('txtnum')
var res = window.document.getElementById('valor')
var tab = []
function adicionar(){
     
    if(num.value.length == 0){
        window.alert('Digite um Número!')
    } else {
        let n = Number(num.value)
        if(0 < n && n <= 100){
            tab.push(n)
            res.innerHTML += ''
            let item = document.createElement('option')
            item.text += `Valor ${n} adicionado`
            item.value += tab.lastIndexOf() 
            res.appendChild(item)
        } else {
            window.alert('Digite um Número entre 1 e 100')
        }
    }
}

