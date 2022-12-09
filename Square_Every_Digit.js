//Bem-vindo. Neste kata, você é solicitado a elevar ao quadrado cada dígito de um número e concatená-los. Por exemplo, se executarmos 9119 na função, sairá 811181, porque 92 é 81 e 12 é 1. Observação: a função aceita um número inteiro e retorna um número inteiro

console.log(squareDigits(9119))

const squareDigits = num => {
  number = num
    .toString()
    .split('')
    .map(n => parseInt(n))
    .map(n => n * n)
    .map(n => n.toString())
    .join('')

  return (number = parseInt(number))
}
