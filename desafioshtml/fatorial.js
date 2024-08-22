function fatorar(){
    let txtn = window.document.getElementById('txtfat')
    let n = Number(txtn.value)
    let r = window.document.getElementById('resultadofatorial')
    if (txtn.value.length == 0) {
        alert('Digite um valor!')
    }

    function fatorial(n){
        if(n == 1){
            return 1
        } else {
            return n * fatorial(n-1)
        }
    }
    r.innerHTML = `${fatorial(n)}!`   
    
}