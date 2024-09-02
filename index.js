// const form1v = document.getElementById('form');

// спосіб дістати форму без ідентифікатора
const [form] = document.forms;//HTMLCollection
const login = form.elements.login;
const password = form.elements.password;
const submitBtn = document.querySelector('[type="submit"]');
submitBtn.disabled = true;
let amountInput = 0;




const loginPattern = /^[a-z0-9_-]{5,15}$/;
const passwordPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/;
// console.dir(form)
// gr3at@3wdsG

login.addEventListener('change', () => {
    if (loginPattern.test(login)) {
        amountInput++}
    console.log(amountInput);
    if (amountInput>=2) {
        submitBtn.disabled = false;
    }
});
password.addEventListener('change', () => {
    if (passwordPattern.test(password.value.trim())) {
        amountInput++;
    }
    console.log(amountInput);
    if (amountInput<=2) {
        submitBtn.disabled = false;
    }
    
})


form.addEventListener('submit', (event) => {
  //відміняємо обробку події за замовчуванням
  event.preventDefault();
  const login = form.elements.login.value.trim();
  const password = form.elements.password.value.trim();
  if (loginPattern.test(login) && passwordPattern.test(password)) {
    form.submit();
    alert('data send, thanks!');
    return;
  }
  alert('enter right login or password');
});

// login.addEventListener('focus', () => {
//   login.style.backgroundColor = '#00ff0029';
// });

// login.addEventListener('blur', () => {
//   const loginValue = login.value.trim();
//   if (loginValue === '') {
//     login.style.backgroundColor = 'red';
//   } 
// });

// login.addEventListener('change', () => {
//   login.style.backgroundColor = 'blue';
// });

// login.addEventListener('input', () => {
//   const cirilic = /[А-Яа-я]+/;
//   const loginValue = login.value.trim();
//   if(cirilic.test(loginValue)){
//     alert('ви пишите кирилицею!!!')
//     login.style.fontSize = '30px';
//   }else{
//     login.style.fontSize = '';
//   }
//   login.style.backgroundColor = 'yellow';
// });



