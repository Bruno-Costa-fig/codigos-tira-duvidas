
let listaExercicios = [] // 10 itens
let exercicioAtual = 0
let offset = 0

const botaoExercicio = document.getElementById('mostra_exercicio')
botaoExercicio.addEventListener('click', () => {
  exibirExercicio()
  if(exercicioAtual === 9){
    offset = offset + 10
    exercicioAtual = 0
    getExercises()
    return
  }
  exercicioAtual++
})

function startPomodoro(){

}

function exibirExercicio(){
  const nameExercicio = document.getElementById('name_exercicio')
  const dificuldadeExercicio = document.getElementById('dificuldade_exercicio')
  const descricaoExercicio = document.getElementById('descricao_exercicio')
  const contador = document.getElementById('contador')

  contador.innerText = exercicioAtual
  nameExercicio.innerText = listaExercicios[exercicioAtual].name
  dificuldadeExercicio.innerText = listaExercicios[exercicioAtual].difficulty
  descricaoExercicio.innerText = listaExercicios[exercicioAtual].instructions
}

function getExercises(){
  fetch("https://api.api-ninjas.com/v1/exercises?type=stretching&offset=" + offset,{
    method: 'GET',
    headers: { 'X-Api-Key': 'SmdSQTAFRn9YWuttQv68gQOcj3SGJ8UhZUlnTheF'},
    contentType: 'application/json',
  })
  .then(response => response.json())
  .then(dados => {
    listaExercicios = dados
  })
  .catch(error => console.log(error))
}

getExercises()
