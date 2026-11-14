const form = document.querySelector('form');
form.addEventListener('input', () => { form.querySelector('output').textContent = ''; });
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.guest.value.trim();
  const output = form.querySelector('output');
  if (!name) {
    output.textContent = 'Введите имя и фамилию.';
    form.elements.guest.focus();
    return;
  }
  output.textContent = 'Демо-ответ принят. Данные не отправлены.';
  form.reset();
});
