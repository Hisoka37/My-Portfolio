const formSubmition = document.querySelector('#submit-form');
function validate() {
  const useremail = document.getElementById('email').value;
  const condition = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  document.forms[0].onsubmit = function (e) {
    if (condition.test(usremail)) {
      document.getElementById('msg1').innerHTML = 'Valid';
    } else {
      document.getElementById('error').innerHTML = 'please enter you email in lower case';
      document.getElementById('error').style.visibility = 'visible';
      document.getElementById('error').style.color = '#f63778';
      document.getElementById('error').style.fontSize = '20px';
      e.preventDefault();
    }
  };
}
formSubmition.addEventListener('click', () => {
  validate();
});
