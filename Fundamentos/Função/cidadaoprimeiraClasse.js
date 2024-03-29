//criar de forma literal uma função

function name(params) {
    
}
//Armazenar em uma variavel
const fun2 = function () { }

//Armazenar em uma array
const array = [function (a, b) { return a + b},fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = { }
obj.falar = function () { return 'opa'}
console.log(obj.falar())

//passar função como param
function run(fun) {
    fun()
}
run(function() {console.log('Executando..')})

// Um função  pode retornar/conter uma função
function soma(a,b) {
    return function (c) {
        console.log(a + b + c);
    }
}
soma(2, 3)(4)