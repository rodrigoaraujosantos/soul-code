const tipoCombustivel = prompt(`Escolha o tipo de combustível:
A - Álcool
G - Gasolina`)

const litrosCombustivel = Number(prompt('Qual a quantidade de litros'))

if (tipoCombustivel == 'a' && litrosCombustivel <= 25) {
  const valorTotal = (1.90 * 0.98) * litrosCombustivel
  alert(`O valor é ${valorTotal.toFixed(2)}`)
} else if (tipoCombustivel == 'a' && litrosCombustivel > 25) {
  const valorTotal = (1.90 * 0.96) * litrosCombustivel
  alert(`O valor é ${valorTotal.toFixed(2)}`)
} else if (tipoCombustivel == 'g' && litrosCombustivel <= 25) {
  const valorTotal = (2.70 * 0.97) * litrosCombustivel
  alert(`O valor é ${valorTotal.toFixed(2)}`)
} else {
  const valorTotal = (2.70 * 0.95) * litrosCombustivel
  alert(`O valor é ${valorTotal}`)
}

