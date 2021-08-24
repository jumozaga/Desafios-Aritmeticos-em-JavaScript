

A seguinte sequência de números 0 1 1 2 3 5 8 13 21... é conhecida como série de Fibonacci. Nessa sequência, cada número, depois dos 2 primeiros, é igual à soma dos 2 anteriores. Escreva um algoritmo que leia um inteiro N (N < 46) e mostre os N primeiros números dessa série.
Entrada

O arquivo de entrada contém um valor inteiro N (0 < N < 46).
Saída

Os valores devem ser mostrados na mesma linha, separados por um espaço em branco. Não deve haver espaço após o último valor.

Minha resolução:

let n = parseInt(gets());
let i = 0
let fibo=[]

while (i < n){
  
    if (i == 0 || i == 1){
        fibo.push(i)
    }
    
    if (i > 1){
        let aux = fibo[i-2] +fibo[i-1]
        fibo.push(aux)
    }
    i++
  
}

fibo = fibo.join(" ");
console.log(fibo)
