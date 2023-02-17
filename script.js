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

  let btnApagar = document.createElement('button')
  btnApagar.classList.add('btnApagar')
  btnApagar.textContent = ''

  btnApagar.addEventListener('click', () => {
    card.style.animation = 'remove 1s'
    setTimeout(() => card.remove(), 500)
  })

  let img2 = document.createElement('img')
  img2.src =
    'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-edit-web-flaticons-lineal-color-flat-icons-7.png'

  let btnEditar = document.createElement('button')
  btnEditar.classList.add('btnEditar')
  btnEditar.textContent = ''

  btnEditar.addEventListener('click', () => {
    btnEditar.readOnly = false
  })

  card.appendChild(input)
  card.appendChild(btnEditar)
  card.appendChild(btnApagar)
  btnApagar.appendChild(img)
  btnEditar.appendChild(img2)

  return card
}
