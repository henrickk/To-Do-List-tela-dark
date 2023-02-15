const btnAdiciona = document.querySelector('#btn-adicionar-tarefa')

btnAdiciona.addEventListener('click', function (event) {
  event.preventDefault()
  let text = document.querySelector('#cria-tarefas').value

  const tarefa = { text }

  const teste = criaCard(tarefa)

  document.querySelector('#tarefas').appendChild(teste)
})

function criaCard(tarefa) {
  let card = document.createElement('div')
  card.classList.add('card')

  let input = document.createElement('input')
  input.classList.add('input-tarefas')
  input.readOnly = true
  input.type = 'text'
  input.value = tarefa.text // Pesquisar "apenas leitura no input"

  let img = document.createElement('img')
  img.src = 'https://img.icons8.com/emoji/48/null/wastebasket-emoji.png'
  console.log('recebe', img)

  let btnApagar = document.createElement('button')
  btnApagar.classList.add('btnApagar')
  btnApagar.textContent = ''

  btnApagar.addEventListener('click', () => {
    card.style.animation = 'remove 1s'
    setTimeout(() => card.remove(), 500)
  })

  card.appendChild(input)
  card.appendChild(btnApagar)
  btnApagar.appendChild(img)

  return card
}
