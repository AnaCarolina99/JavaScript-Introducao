function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO]")
    }else{
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo invalido! Considerando o Passo = 1')
            p = 1
        }
        if(i< f){
            //Contagem crescente
            for(var c = i; c<=f;c+=p){
                res.innerHTML += ' ' + c +'\u{1F449}'
            }
        }else{
            //Contagem decrescente 
            for(var c = i; c >= f;c-=p){
                res.innerHTML += ' ' + c +'\u{1F449}'
            }
        }
        res.innerHTML += '\u{1F308}'

    }
    

}