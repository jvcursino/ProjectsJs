var resposta = document.getElementById('res')
var numerosSalvos = []
var num = document.getElementById('numero')
var entradas = document.getElementById('entradas')

function adicionar(){ //adiciona numero no array
let n = Number(num.value)
if(numerosSalvos){
  resposta.innerHTML = ''
}
numerosSalvos.push(n)
let item = document.createElement('option')
item.text = `O numero ${n} foi adicionado com sucesso!`
entradas.appendChild(item)
} 

function checar(){ //Checa se o numero incerido e valido e unico
  let n = Number(num.value)
  if (!n){ 
    alert('Por favor insira um numero')
  } else if (n<1 || n>100){
    alert('Por favor insira um numero valido')
    } else if (numerosSalvos.length != 0 && numerosSalvos.indexOf(n) != -1){
      alert('Numero ja incerido')
      } else {
      adicionar()
    }
}
  
function verificar(){
let qtNumeros
let maiorNumero
let menorNumero
let sum = 0
let media
numerosSalvos.sort(function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
  })
for (let pos in numerosSalvos) {
  sum += Number(numerosSalvos[pos])
}
qtNumeros = numerosSalvos.length
maiorNumero = numerosSalvos[numerosSalvos.length-1]
menorNumero = numerosSalvos[0]
media = sum/qtNumeros
if (numerosSalvos.length == 0){
  alert('Adicione valores antes de verificar')
} else {
resposta.innerHTML = `<p>Ao todo temos ${qtNumeros} numeros cadastrados</p>`
resposta.innerHTML +=`<p>O maior valor informado foi ${maiorNumero}</p>`
resposta.innerHTML +=`<p>O menor valor informado foi ${menorNumero}</p>`
resposta.innerHTML +=`<p>Somando todos os valores, temos ${sum}</p>`
resposta.innerHTML +=`<p>A media dos valores digitados e ${media}</p>`
}
}