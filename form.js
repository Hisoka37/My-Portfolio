const formSubmition = document.querySelector('#submit-form');
function validate() {
  const useremail = document.getElementById('email').value;
  const condition = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  document.forms[0].onsubmit = function (e) {
    if (condition.test(useremail)) {
      document.getElementById('msg1').innerHTML = 'Valid';
    } else {
      
    }
  };
}
formSubmition.addEventListener('click', () => {
  validate();
});