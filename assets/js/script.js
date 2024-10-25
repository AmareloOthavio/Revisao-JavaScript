/* Exercício 1 */
var nome2 = 'Othavio'
console.log('Exercício 1: ',nome2)

/* Exercício 2 */
var a = 5
var b = 7
console.log('Exercício 2: ',a + b)

/* Exercício 3 */
var idade = 17
if (idade >= 18) {
    console.log('Exercício 3: ','Você é maior de idade')
}
else {
    console.log('Exercício 3: ','Você não é maior de idade')
}

/* Exercício 4 */
var numero = 6
console.log('Exercício 4: ',6**2)

/* Exercício 5 */
var celsius = 25
var farenheit = celsius * (9/5) + 32
console.log('Exercício 5: ','Farenheit: ',farenheit)

/* Exercício 6 */
var num = 67
if (num % 2 == 0) {
    console.log('Exercício 6: ', 'Par')
}
else {
    console.log('Exercício 6: ', 'Ímpar')
}

/* Exercício 7 */
var num2 = 957
function trazerAbsoluto(numero) {
    let centena = parseInt(numero / 100)
    let dezena = parseInt((numero%100) /10)
    let unidade = numero % 10
    return [centena+'00',dezena+'0',unidade]
}
console.log('Exercício 7: ',trazerAbsoluto(num2))

/* Exercício 8 */
var num3 = -0.667
if (num3 > 0) {
    console.log('Exercício 8: ','Número positivo')
}
else if (num3 < 0) {
    console.log('Exercício 8: ','Número negativo')
}
else {
    console.log('Exercício 8: ','É zero')
}

/* Exercício 9 */
var nome = 'Pablito'
if (!(nome == '' || nome == null)) {
    console.log('Exercício 9: ',nome)
}

/* Exercício 10 */
var numPrimeiro = 15
var numSegundo = 25
var numTerceiro = 10
console.log('Exercício 10: ',(numPrimeiro+numSegundo+numTerceiro)/3)

/* Exercício 11 */
var ano = 2015
if (ano % 4 == 0) {
    console.log('Exercício 11: ','O ano é bissexto')
}
else {
    console.log('Exercício 11: ','Ano não bissexto')
}

/* Exercício 12 */