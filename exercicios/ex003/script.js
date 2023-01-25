function contar() {
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var res = window.document.querySelector('input#res')
    if (fim == 'null' || inicio == 'null') {
        alert('[ERRO] Digite numeros para o inicio e fim')
    }
}