// Defina uma função que receba um argumento inteiro e retorne um valor lógico trueou falsedependendo se o inteiro for primo.

// De acordo com a Wikipedia, um número primo (ou primo) é um número natural maior que 1aquele que não possui divisores positivos além de 1e ele mesmo.

// Requisitos
// Você pode presumir que receberá uma entrada inteira.
// Você não pode assumir que o número inteiro será apenas positivo. Você também pode receber números negativos ( ou 0).

const isPrime = num => {

  if(num > 1){
    for (i = 2; i < num; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true
  }
  return false
 
}