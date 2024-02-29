function fatorar(){
    let txtn = window.document.getElementById('txtnum')
    let n = Number(txtn.value)
    if (n.value.length == 0) {
        alert('deu certo')
    } else if(n <= 1){
        return 1
    } else {

        return n * fatorial(n-1)
    }    
}