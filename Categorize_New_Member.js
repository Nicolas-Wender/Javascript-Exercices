// O Western Suburbs Croquet Club tem duas categorias de membros, Senior e Open. Eles gostariam de sua ajuda com um formulário de inscrição que informará aos associados em potencial em qual categoria eles serão colocados.

// Para ser um sénior, o membro deve ter pelo menos 55 anos e um handicap superior a 7. Neste clube de croquet, os handicaps variam de -2 a +26; quanto melhor o jogador, menor o handicap.

// Entrada
// A entrada consistirá em uma lista de pares. Cada par contém informações para um único membro em potencial. As informações consistem em um número inteiro para a idade da pessoa e um número inteiro para a eficiência da pessoa.

// Resultado
// A saída consistirá em uma lista de valores de string (em Haskell e C: Openou Senior) informando se o respectivo membro deve ser colocado na categoria sênior ou aberta.

input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9]
]

const openOrSenior = input => {
  var categorize = []

  input.forEach(element => {
    element[0] >= 55 && element[1] > 7 ? categorize.push('Senior') : categorize.push('Open');
  })

  return categorize
}

console.log(openOrSenior(input))