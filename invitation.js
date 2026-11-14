const reply = document.querySelector('#reply-dialog');
const form = reply.querySelector('form');
const result = document.querySelector('#reply-result');
document.querySelector('#choose-reply').addEventListener('click', () => reply.showModal());
document.querySelector('#close-reply').addEventListener('click', () => reply.close());
form.addEventListener('input', () => form.elements.guest.setCustomValidity(''));
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const guest = form.elements.guest;
  if (!guest.value.trim()) {
    guest.setCustomValidity('Введите имя и фамилию.');
    guest.reportValidity();
    return;
  }
  const attending = new FormData(form).get('attendance') === 'yes';
  result.textContent = attending
    ? 'Ваш пробный ответ — «С радостью приду».'
    : 'Ваш пробный ответ — «Не смогу прийти».';
  reply.close();
});
