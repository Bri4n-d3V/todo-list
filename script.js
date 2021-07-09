const obj = {
  input: document.querySelector('#texto-tarefa'),
  button: document.querySelector('#criar-tarefa'),
  ol: document.querySelector('ol'),
  li: document.querySelector('li'),
  task: document.querySelectorAll('.task'),
  selected: document.querySelector('#selected')
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