const form = document.getElementById('email');
const email = document.getElementById('emailbox');
const text = document.getElementsByClassName('error-text')
const img = document.getElementsByClassName('error-img')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = email.value;

    if (!validateEmail(emailVal)) {
        email.style.borderColor = "var(--Soft-Red)";
      } else {
        email.style.borderColor = "var(--Desaturated-Red);";
      }
      
      if (!validateEmail(emailVal)) {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
      
      if (!validateEmail(emailVal)) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}