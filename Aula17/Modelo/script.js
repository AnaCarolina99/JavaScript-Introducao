var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
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
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = 'Valor '+ num.value +' adicionado'
        lista.appendChild(item)
    } else{
        window.alert('Valor Inválido')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert("valor invalido")
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(maior < valores[pos])
                maior = valores[pos]
            if(menor > valores[pos])
                menor = valores[pos]
        }
        media = soma/valores.length
        res.innerHTML = ''
        res.innerHTML += '<p> Ao todo temos, '+ total +" numeros cadastrados</p>"
        res.innerHTML += '<p> O maior foi '+ maior +" </p>"
        res.innerHTML += '<p> O menor foi '+ menor +" </p>"
        res.innerHTML += '<p> A soma foi '+ soma +" </p>"
        res.innerHTML += '<p> A media foi '+ media +" </p>"
    }
}