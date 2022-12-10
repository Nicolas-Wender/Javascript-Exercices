// Normalmente, quando você compra algo, é perguntado se o número do seu cartão de crédito, número de telefone ou resposta à sua pergunta mais secreta ainda está correto. No entanto, como alguém pode olhar por cima do seu ombro, você não quer que isso apareça na tela. Em vez disso, nós o mascaramos.

// Sua tarefa é escrever uma função maskify, que transforma todos, exceto os últimos quatro caracteres, em '#'.

// pegar a string
// converter em array
// selecionar os ultimos 4 elementos do array
// trocar os valores do array
cc = '4556364607935616'

// console.log(maskify(cc))

const maskify = cc => {
  mask = cc.split('')
  for (i = 0; i < mask.length - 4; i++) {
    mask[i] = '#'
  }
  return mask.join('')
}

console.log(maskify(cc))
