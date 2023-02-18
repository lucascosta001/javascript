var num = window.document.getElementById('txtnum')
var res = window.document.getElementById('lista')
var tab = []
function adicionar(){
     
    if(num.value.length == 0){
        window.alert('Digite um Número!')
    } else {
        let n = Number(num.value)
        if(0 < n && n <= 100){
            for (let index = 0;array.length; index++) {
                const element = array[index];
                
            }
            if (n != tab) {
                tab.push(n)
            let item = document.createElement('option')
            item.text += `Valor ${n} adicionado`
            item.value += tab.lastIndexOf() 
            res.appendChild(item)
            } else{
                alert(`o ${n} já foi adicionado`)
            }
            
        } else {
            window.alert('Digite um Número entre 1 e 100')
        }
    }
}

function finalizar(){

}
