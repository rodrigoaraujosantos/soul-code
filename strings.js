const aspasSimples = 'Olá, mundo'
console.log(aspasSimples)

const aspasDuplas = 'Olá, eu sou 0 \nJavascript. Eu sou melhor que o \nPython'
console.log(aspasDuplas)

const textoComCrase = `Olá, 
eu sou 0 Javascript. 
Eu sou melhor 
que o Python`
console.log(textoComCrase)

const a = 'Olá'
const b = 'mundo'
console.log(a+' '+b)

const texto = 'O Javascript foi criado alguns anos após o Python, porém o Javascript é mais bacana'

console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat('. A linguagem C é a mão de todas as linguagens.'))

console.log(texto[2], texto[17])
console.log(texto.substring(2, 16))

console.log(texto.replace('Javascript', 'Python')) // substitui apenas a primeira palavra que encontrar

console.log(texto.replaceAll('o', 'a')) // substitui todas as palavras ou letras, considerando maiusculas de minusculas

console.log(texto.replace(/javascript/g, 'Python')) // considera maiusculas
console.log(texto.replace(/javascript/gi, 'Python')) // desconsidera maiusculas

const html = '<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>'))

console.log(html.endsWith('</html>'))

const mensagem = '          Olá mundo  '
console.log(mensagem)
console.log(mensagem.trim())


console.log(texto.length)
console.log(texto.length > 82)