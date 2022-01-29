const ball = document.getElementById('ball');
const body = document.querySelector('body');

body.classList.add('dark');

ball.addEventListener('click', () => {
  let check = ball.checked;

  if (check) {
    body.classList.add('light');
    body.classList.remove('dark');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
  }
});
