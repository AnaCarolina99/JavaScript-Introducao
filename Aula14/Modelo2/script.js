function contar(){
    var num = document.getElementById('txtabu')
    var res = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert("Digite um numero")
        
    }else{
        var n = Number(num.value)
        res.innerHTML = ''
        for(var i = 1;i <= 10;i++){
            var item = document.createElement('option')
            item.text = n+' X '+i+' = '+ n*i
            res.appendChild(item)
        }
    }
    

}