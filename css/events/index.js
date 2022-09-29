/**
 * criar uma função que mostra o alerta na tela
 */


/**
 * A propriedade classList retorna um array
 */

/**
 * classList.add serve para add outra classe no doc html
 */
function mostrarAlerta() {
  
  const divAlerta = document.getElementById('alerta')
  divAlerta.classList.add('mostrar')
  

  
}



/**
 * classList.remove remove uma classe de uma tag html
 */

function fecharAlerta() {
  const divAlerta = document.getElementById('alerta')
  divAlerta.classList.remove('mostrar')
}


const btnMostrar = document.getElementById('mostrar')

const btnFechar = document.getElementById('fechar')

/**
 * se eu precisar passar uma função como parâmetro para outra, não coloco parenteses, pois eu quero a ação somente quando eu clicar
 */

btnMostrar.addEventListener('click', mostrarAlerta)

btnFechar.addEventListener('click', fecharAlerta)