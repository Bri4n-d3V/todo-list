const obj = {
  input: document.querySelector('#texto-tarefa'),
  button: document.querySelector('#criar-tarefa'),
  ol: document.querySelector('ol'),
  button2: document.querySelector('#apaga-tudo'),
  button3: document.querySelector('#remover-finalizados'),
  button4: document.querySelector('#salvar-tarefas'),
  button5: document.querySelector('#remover-selecionado')
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
  obj.li = document.querySelectorAll('li');
})

// Poem fundo cinza ao clicar no item da lista.
document.addEventListener('click', event => {
  obj.task = document.querySelectorAll('.task');
  if (event.target.classList.contains('task')) {
    for (let i = 0; i < obj.task.length; i += 1) {
      obj.task[i].id = '';
    }
    event.target.id = 'selected';
    obj.selected = document.querySelector('#selected');
  }
})

//Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
document.addEventListener('dblclick', event => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else if (event.target.classList.contains('task')) {
    event.target.classList.add('completed');
  }
})

// Remove itens da lista
obj.button2.addEventListener('click', () => {
  obj.ol.innerHTML = '';
})

// Remover finalizados
obj.button3.addEventListener('click', () => {
  let completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].parentNode.removeChild(completed[i]);
  }
})

// Salvar Tarefas
obj.button4.addEventListener('click', () => {
  localStorage.setItem('listItems', obj.ol.innerHTML);
});
let savedItems = localStorage.getItem('listItems');
obj.ol.innerHTML = savedItems;

// Remover Selecionado
obj.button5.addEventListener('click', () => {
  let selected = document.querySelector('#selected');
    selected.parentNode.removeChild(selected);
});
