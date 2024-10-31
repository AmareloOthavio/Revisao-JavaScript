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
var idade2 = 33
if (idade2 < 16) {
    console.log('Exercício 12: ','Criança')
}
else if (idade2 >= 16 && idade2 <= 18) {
    console.log('Exercício 12: ','Adolescente')
}
else if (idade2 >= 18 && idade2 <= 50) {
    console.log('Exercício 12: ','Adulto')
}
else {
    console.log('Exercício 12: ','Idoso')
}

/* Exercício 13 */
var letra = 'C'
if (letra.match(/(?<vogal>a|e|i|o|u|A|E|I|O|U)/)) {
    console.log('Exercício 13: ','É uma vogal')
}
else if (letra.match(/(?<consoante>b|c|d|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|B|C|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|V|W|X|Y|Z)/)) {
    console.log('Exercício 13: ','É uma consoante')
}
else {
    console.log('Exercício 13: ','Nem consoante nem vogal')
}

/* Exercício 14 */
var numPrimeiro1 = 4
var numSegundo1 = 77
function acharMaior(num1,num2) {
    return Math.max(num1,num2)
}
console.log('Exercício 14: ','Número maior: ',acharMaior(numPrimeiro1, numSegundo1))

/* Exercicio 15 */
var string = 'JavaScript é interpretado localmente pelo navegador!'
if (string.match("JavaScript")) {
    console.log('Exercício 15: ','"JavaScript" encontrado na string!')
}

/* Exercício 16 */
var nota = 10
if (nota >= 0 && nota <= 2) {
    console.log('Exercício 16: ','E')
}
else if (nota >= 3 && nota <= 4) {
    console.log('Exercício 16: ','D')
}
else if (nota >= 5 && nota <= 6) {
    console.log('Exercício 16: ','C')
}
else if (nota >= 7 && nota <= 8) {
    console.log('Exercício 16: ','B')
}
else if (nota >= 9 && nota <= 10) {
    console.log('Exercício 16: ','A')
}
else {
    console.log('Exercício 16: ','Erro, nota negativa')
}

/* Exercício 17 */
var num4 = 455
if (num4 % 5 == 0) {
    console.log('Exercício 17: ','Múltiplo de 5')
}
else if (num % 3 == 0) {
    console.log('Exercício 17: ','Múltiplo de 3')
}

/* Exercício 18 */
function trazerMenor(a,b,c) {
    return Math.min(a,b,c)
}
console.log('Exercício 18: ',trazerMenor(1,2,3))

/* Exercício 19 */
var senha = 'batata'
if (senha.length >= 8) {
    console.log('Exercício 19: ','Senha aceita')
}
else {
    console.log('Exercício 19: ','Erro, a senha precisa ter pelo menos 8 dígitos')
}

/* Exercício 20 */
function verificarPresenca(num,min,max) {
    if (num >= min && num <= max) {
        return true
    }
    else {
        return false
    }
}
num5 = 67
console.log('Exercício 20: ',num5,' está entre 30 e 100? ',verificarPresenca(num5,30,100))

/* Exercício 21 */
var numeros = []
for (i = 1; i< 11; i++) {
    numeros.push(i)
}
console.log('Exercício 21: ',numeros)

/* Exercício 22 */
var tabuada = []
for (i=1; i <11; i++) {
    tabuada.push((i+' x 5 = '+i*5))
}
console.log('Exercício 22: ',tabuada)

/* Exercício 23 */
var soma = 0
for (i=1; i <101; i++) {
    soma += i
}
console.log('Exercício 23: ',soma)

/* Exercício 24 */
var numeros2 = []
for (i=1; i < 51; i++) {
    if (i % 2 == 0) {
        numeros2.push(i)
    }
}
console.log('Exercício 24: ',numeros2)

/* Exercício 25 */
function fibonacci(n) {
    let fibonacci = [0,1]
    let a = 0
    let b = 1
    
    let proximoNum = 0
    for (i=2; i<n; i++){
        proximoNum = a + b
        fibonacci.push(proximoNum)
        a = b
        b = proximoNum
    }
    return fibonacci
}
console.log('Exercício 25: ',fibonacci(9))

/* Exercício 26 */
var string2 = 'papagaio'
var string2Inver = ''
var lista = []
for (i=1; i<=string2.length; i++) {
    string2Inver += string2.split('').reverse()[i-1]
}
console.log('Exercício 26: "',string2, '" se torna "',string2Inver,'"')

/* Exercício 27 */
var numeros3 = [1,2,3,4,5,6,7,8,9,10]
var numeros3Pares = []
for (i=1; i <numeros3.length; i++) {
    if (numeros3[i-1] % 2 == 0 ) {
        numeros3Pares.push(numeros3[i-1])
    }
}
console.log('Exercício 27: ',numeros3Pares)

/* Exercício 28 */
var array = [1,2,3,77,498.87]
var maiorItem = 0
for (i=0; i <= array.length; i++) {
    if (array[i] > maiorItem) {
        maiorItem = array[i]
    }
}
console.log('Exercício 28: ',maiorItem)

/* Exercício 29 */
var num6 = 7
var primo = true
for (i=2; i<num6; i++) {
    if (num6 % i == 0) {
        primo = false
        break
    }
}
if (primo) {
    console.log('Exercício 29: ','Primo')
}
else {
    console.log('Exercício 29: ','Não primo')
}

/* Exercício 30 */
console.log('Exercício 30: ')
for (i=0; i < 10; i++) {
    console.log('JavaScript')
}

/* Exercício 31 */
function trazerSoma(array) {
    let soma = 0
    for (pos in array) {
        soma += array[pos]
    }
    return soma
}
console.log('Exercício 31: ',trazerSoma([25,66,44,32]))

/* Exercício 32 */
var array2 = ['banana',33,55,'peixe','']
var elementoAProcurar = 55
for (posicao in array2) {
    if (array2[posicao] == elementoAProcurar) {
        console.log('Exercício 32: ','Elemento encontrado!')
        break
    }
    else {
        console.log('Exercício 32: ','Procurando elemento...')
    }
}

/* Exercício 33 */
var array3 = ['a','b','c','d']
function inverterLista(lista) {
    return lista.reverse()
}
console.log('Exercício 33: ',inverterLista(array3))

/* Exercício 34 */
var array4 = [1,1,1,1,2,3,4,5,3,5,6,7,8,9,10,10,10,10,11]
var array4Novo = []
/* Usei o método "includes()" que vi em
 https://builtin.com/software-engineering-perspectives/remove-duplicates-from-array-javascript
 e pesquisei mais a fundo em
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes */
for (pos in array4) {
    if (array4Novo.includes(array4[pos])) {
        continue
    }
    array4Novo.push(array4[pos])
}
console.log('Exercício 34: ',array4Novo)

/* Exercício 35 */
// https://medium.com/codingbeauty-tutorials/javascript-get-union-of-arrays-f1d15ce8acf1
/* Escolhi usar a maneira de "spread", que traz os elementos de dentro de uma variável composta */
var array5 = [1,2,3,4,5]
var array6 = ['a','b','c','d','e']
function unirArrays(ar1, ar2) {
    let ar3 = [...ar1, ...ar2]
    return ar3
}
console.log('Exercício 35: ',unirArrays(array5,array6))

/* Exercício 36 */
var array7 = [11,22,33,44,55,66,12]
function trazerPosicao(array,item) {
    for (pos in array) {
        if (array[pos] == item) {
            return pos
        }
    }
}
console.log('Exercício 36: ',trazerPosicao(array7, 12))

/* Exercício 37 */
function trazerSegundoM(lista) {
    let maior = Math.max(...lista)
    for (pos in lista) {
        if (lista[pos] == maior) {
            lista.splice(pos,1)
        }
    }
    return Math.max(...lista)
}
var array8 = [100, 90, 80, 40]
console.log('Exercício 37: ',trazerSegundoM(array8))

/* Exercício 38 */
var string3 = ''
var array9 = [800, '"aaaa"', "'bbbb'", 348.933, 'b', true, false, null]
for (pos in array9) {
    string3 += array9[pos]
}
console.log('Exercício 38: ',string3)

/* Exercício 39 */
var array10 = ['carro', 'abóbora', 'teclado', 'mouse', 'outubro']
function deixarM(array) {
    let array2 = []
    for (pos in array) {
        array2.push(array[pos].toUpperCase())
    }
    return array2
}
console.log('Exercício 39: ',deixarM(array10))

/* Exercício 40 */
var array11 = [111,222,333,444,555,777,888,999,100]
function contarImpares(array) {
    let impares = 0
    for (i in array) {
        if (array[i] % 2 != 0) {
            impares += 1
        }
    }
    return impares
}
console.log('Exercício 40: ',contarImpares(array11))

/* Exercício 41 */
const pessoa = {
    nome: "Jorge",
    idade: 25,
    cidade: 'Penápolis'
}

/* Exercício 42 */
pessoa.email = "Jorginho@email.com"

/* Exercício 43 */
function exporObj(obj) {
    for (propriedade in obj) {
        console.log('   ',propriedade, obj[propriedade])
    }
}
console.log("Exercício 43: ")
console.log(exporObj(pessoa))

/* Exercício 44 */