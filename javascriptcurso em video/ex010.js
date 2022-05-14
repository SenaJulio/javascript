var agora = new Date()
var diaSem = agora.getDay()

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/

console.log(diaSem);

switch (diaSem) {
    case 0:
        console.log('Domingo');
        break;
 case 1:
 console.log('Segunda');
 break;
    default:
        break;
}