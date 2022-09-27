let end = {
  rua: 'Rua 10',
  numero: 456,
  estado: 'BH',
  complemento: 'viela',
  cep: '123456-000'
}


let pessoa = {
  nome: 'Rodrigo',
  idade: 23,
  cpf: '123.344.677-66',
  altura: 156,
  endereço: { ...end }, // destructing
  solteiro: true,
  habilidades: ['React', 'Java', 'Javascript', 'Rust'],
  cumprimentar() {

    // quando eu quero usar um objeto dentro dele mesmo eu uso a palavra reservada this
    console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
  }
}

// console.log(pessoa.endereço.estado)
// console.log(pessoa.habilidades[2])

// pessoa.cumprimentar()
// pessoa.nome = 'Pablo Escobar'
// pessoa.cumprimentar()
// pessoa.habilidades.push('Angular')
// console.log(pessoa.habilidades)
// console.log(pessoa['cpf'])

console.log(end.rua)
console.log(pessoa.endereço.rua)
pessoa.endereço.rua = 'Rua 20'
console.log(end.rua)
console.log(pessoa.endereço.rua)