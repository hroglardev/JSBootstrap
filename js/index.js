const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');
const form = document.querySelector('form');

const emailInput = document.getElementById('exampleInputEmail1');
const checkboxes = Array.from(
  document.querySelectorAll("input[type='checkbox']")
);
form.addEventListener('submit', (event) => event.preventDefault());

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show();
  });
}

form.addEventListener('input', () => {
  emailInput.value.trim() === ''
    ? toastTrigger.setAttribute('disabled', 'true')
    : toastTrigger.removeAttribute('disabled');

  let checkboxChecked = checkboxes.some((checkbox) => checkbox.checked);

  checkboxChecked
    ? toastTrigger.removeAttribute('disabled')
    : toastTrigger.setAttribute('disabled', 'true');
});

emailInput.value.trim() === ''
  ? toastTrigger.setAttribute('disabled', 'true')
  : toastTrigger.removeAttribute('disabled');
