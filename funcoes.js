// function cumprimentar(mensagem, repetir = 1){
//   for (let i = 1; i <= repetir; i++){
    
//     alert(mensagem)
//   }
//   // document.write(`<p>${mensagem}</p>`)
// }

// function soma(num, num2) {
//   return num + num2 // return serve para retornar o resultado da função
// }

// function maiorValor(a, b) {
//   if (a > b){
//     return a
//   } else {
//     return b
//   }
// }

// let resultado = soma(4, 7)

// console.log(`O valor da variável resultado é ${resultado}`)


// const num1 = parseInt(prompt('Informe o primeiro numero'))
// const num2 = parseInt(prompt('Informe o segundo numero'))

// alert(`O maior valor entre esses é ${maiorValor(num1, num2)}`)

// cumprimentar('Olá, mundo!', 3)
// cumprimentar('Eu gosto muito do Javascript')
// cumprimentar('Javascript sola o c#')

/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 */

function equacaoSegundoGrau(a, b, c) {
  
  const delta = b ** 2 - 4 * a * c
  const raizDelta = Math.sqrt(delta)
  // const raizDelta = delta ** 0.5
  const x1 = (-b + raizDelta) / (2 * a)
  const x2 = (-b - raizDelta) / (2 * a)
  
  return [x1, x2]
  
}

console.log(equacaoSegundoGrau(1, -1, -12))