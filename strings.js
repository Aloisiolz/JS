const ESCOLA = "SOBRE";
console.log(ESCOLA.charAt(4))
console.log(ESCOLA.charAt(7)) // no javascript não gera o erro.
console.log(ESCOLA.charCodeAt(3))
console.log(ESCOLA.indexOf(3))

//comando bastante usado o substring
console.log(ESCOLA.substring(1, 3)) // não adiciona o número 3
console.log(ESCOLA.substring(1))

//concatenar
console.log('ESCOLA: '.concat(ESCOLA).concat(" !")); // usado para concatenar
console.log(ESCOLA.replace(/\w/g, 'b')) //REgedex para deixar pré formatado
console.log(ESCOLA.replace('B', 'A')) // o caracter necessita está igual na varial, senão não altera.
console.log("Aloisio, Jose, Aline".split(',')) // função de converter string em array

const nome="Aloisio";
const concatenacao = 'Olá ' + nome + ' !'
//const template = 'Ola   '+ ${nome} + '!'  

console.log(concatenacao, template)