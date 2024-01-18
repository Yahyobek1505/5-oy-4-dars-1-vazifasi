const nameInput = document.getElementById('name');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const inputAddress = document.getElementById('inputAddress');
const inputCity = document.getElementById('inputCity');
const zipCode = document.getElementById('inputCER');
const gridCheck = document.getElementById('gridCheck');
const btn = document.getElementById('btn');

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true
  }
    alert("You have entered an invalid email address!")
    return false
}

function validate() {
  if (nameInput.value.length <= 3) {
    alert("Name 3 belgidan ortiq bo'lishligi kerak!");
    nameInput.focus();
    return false;
  }
  if (!ValidateEmail(inputEmail.value)) {
    alert("Email notog'ri kiritildi!");
    inputEmail.focus();
    return false;
  }
  if (inputPassword.value.length < 8) {
    alert("Parol 8 ta belgidan kam bo'lishi mumkin emas!");
    inputPassword.focus();
    return false;
  }
  if (inputAddress.value.length < 4) {
    alert("Address 4 ta belgidan kam bo'lishi mumkin emas!");
    inputAddress.focus();
    return false;
  }
  if (inputCity.value.length < 4) {
    alert("City 4 ta belgidan kam bo'lishi mumkin emas!");
    inputCity.focus();
    return false;
  }
  if (inputCER.value.length < 4) {
    alert("ZipCode 6 ta belgidan kam bo'lishi mumkin emas!");
    inputCER.focus();
    return false;
  }
  if (gridCheck.value) {
    return false
  }
  return true
}
btn && btn.addEventListener('click', function (event) {
  event.preventDefault();
  if (validate()) {
    alert("Validatsiyadan o'tdi.")
  } else{
    console.log("validatsiyadan o'tmadi ");
  }
})
