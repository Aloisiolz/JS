const peso = 1.0;
const Peso2 = Number(2.5)
console.log(peso, Peso2)
console.log(Number.isInteger(peso))
console.log(Number.isSafeInteger(Peso2))
let prova1, prova2, prova3, media
prova1 = 2;
prova2 = 10;
prova3 = 7;
media = (prova1 + prova2 + prova3) / 3
//console.log(media.toFixed(2)) // método toFixed determino a quantidade de casa decimais. 
console.log(media.toLocaleStringtoString())
//console.log(typeof media)
let numero1 = NaN
let numero2 = "15";
numero2 = numero1 + "2"
console.log(typeof NaN)
var myNumber = 2;
while(myNumber != Infinity){
    myNumber = myNumber * myNumber;
    console.log(myNumber)
    if(myNumber === 4294967296){
        console.log("vai terminar pra que ir até o infinito")
        break        
    }
}
//Divisão por 0 também gera o infinity
console.log(0xAA)
//0x indica que é hexadecimal
myNumber = 32;
console.log(myNumber.toString(10)); // returna 32
console.log(myNumber.toString(32)) // returna 10 
console.log(myNumber.toString(16)) // retorna 20
console.log(myNumber.toString(8)) // retorna 40
console.log(myNumber.toString(2)) // returns 100000 binário number
var x = 123;
var y = new Number(123);
console.log(x,y)
console.log(typeof x, typeof y)
console.log(x == y) // são iguais na relação com o número
console.log(x === y) //não são iguais devido tipo de cada variavel, pois uma é number e a outra é object, mesmo os números sendo iguais

var obj1 =  new Number (123);
var obj2 = new Number(123);
console.log(!obj1 === obj2); // objects não podem ser comparados, pois quando se comparam sempre aparece a mensagem de false



