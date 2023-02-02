const contactmeForm = document.querySelector('form');
const EmailValue = document.getElementById('email');
const NameValue = document.getElementById('username');
const MessageValue = document.getElementById('message');

contactmeForm.addEventListener('input', () => {
  const Data = {
    name: NameValue.value,
    email: EmailValue.value,
    message: MessageValue.value,
  };
  localStorage.setItem('userData', JSON.stringify(Data));
});
