const obj = {
  input: document.querySelector('#texto-tarefa'),
  button: document.querySelector('#criar-tarefa'),
  ol: document.querySelector('ol'),
}

// Adiciona texto do input à uma lista pelo botão.
obj.button.addEventListener('click', () => {
  let li = document.createElement('li');

  obj.ol.appendChild(li);
  li.className = 'task';
  li.innerHTML = obj.input.value;
  obj.input.value = "";

  obj.task = document.querySelectorAll('.task');
  obj.ol = document.querySelector('ol');
})

// Poem fundo cinza ao clicar no item da lista.
document.addEventListener('click', event => {
  if (event.target.classList.contains('task')) {
    for (let i = 0; i < obj.task.length; i += 1) {
      obj.task[i].id = '';
    }
    event.target.id = 'selected';
    obj.selected = document.querySelector('#selected');
  }
})

// //Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
document.addEventListener('dblclick', event => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else if (event.target.classList.contains('task')) {
    event.target.classList.add('completed');
  }
})