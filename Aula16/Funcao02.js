function soma(n1,n2){
    return n1 + n2
}
console.log(soma(2,3))
let v = function(x){
    return x*2
}
console.log(v(5))

function fat(n){
    var multi = 1
    for(var i = n; 1 < i; i--){
        multi *= i 
    }
    return multi
}
console.log('Iterativo'+fat(6))