// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
// normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
// para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento

// 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 À vista no cartão de crédito, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Em três vezes, preço normal de etiqueta mais juros de 10%

let precoProduto = parseFloat(prompt('Qual o preço do produto?'))

while (isNaN(precoProduto) || precoProduto <= 0){
  alert('Informe um valor válido e sem caracter especial!')
  precoProduto = parseFloat(prompt('Qual o preço do produto?'))
}


let mensagem = `
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro (10% de desconto)
Digite 2 para pagamento em cheque (10% de desconto)
Digite 3 para pagamento com cartão` 

let metodoDePagamento = parseInt(prompt(mensagem))

while (isNaN(metodoDePagamento) || metodoDePagamento < 1 || metodoDePagamento > 3) {
 alert('Forma de pagamento inválida!')
 metodoDePagamento = parseInt(prompt(mensagem))
}

console.log(precoProduto)
console.log(metodoDePagamento)

if (metodoDePagamento == 1 || metodoDePagamento == 2){
 const precoFinal = precoProduto * 0.9
 alert(`O preço final do pagamento é ${precoFinal}`)
} else if (metodoDePagamento == 3) {
  const parcelas = parseInt(prompt(`Informe a quantidade de parcelas:
  (1x 15% de desconto)
  (2x valor da etiqueta)
  (3x 10% de juros)`))
  if (parcelas == 1) {
    const precoFinalCartao = precoProduto * 0.85
    alert(`O preço final do pagamento em cartão é ${precoFinalCartao}`)
  } else if (parcelas == 2) {
    alert(`O preço final do pagamento em cartão é ${precoProduto}`)
  } else if (parcelas >= 3) {
    // alert(`O preço final do pagameto em cartão é ${precoProduto + precoProduto * 0.10}`)
    // const precoFinalCartao = precoProduto + precoProduto * 0.10
    // alert(`O preço final do pagamento em cartão é ${precoFinalCartao}`)
    const precoFinalCartao = precoProduto * 1.1
    alert(`O preço final do pagamento em cartão é ${precoFinalCartao.toFixed(2)}`)
  }
  alert('Obrigado pela preferência!!')
}



