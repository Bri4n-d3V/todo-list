const obj = {
  input: document.querySelector('#texto-tarefa'),
  button: document.querySelector('#criar-tarefa'),
  ol: document.querySelector('ol'),
  li: document.querySelector('li')
}

obj.button.addEventListener('click', () => {
  let li = document.createElement('li');
  obj.ol.appendChild(li);
  li.innerHTML = obj.input.value;
  obj.input.value = "";
})

obj.ol.addEventListener('click', event => {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})
