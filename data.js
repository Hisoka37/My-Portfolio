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
const getDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
NameValue.value = getDataFromLocalStorage.name;
EmailValue.value = getDataFromLocalStorage.email;
MessageValue.value = getDataFromLocalStorage.message;
