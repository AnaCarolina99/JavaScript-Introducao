var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
window.alert('Olá mundo')
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = 'Valor '+ num.value +'adicionado'
        lista.appendChild(item)
    } else{
        window.alert('Valor Inválido')
    }
    num.value = ''
    num.focus()
}