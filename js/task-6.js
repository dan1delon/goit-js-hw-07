const input = document.querySelector('.input-number');
const createBtn = document.querySelector('.button-create');
const destroyBtn = document.querySelector('.button-destroy');
const boxes = document.getElementById('boxes');


createBtn.addEventListener('click', () => {
  const amount = input.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});

function createBoxes(amount) {
  boxes.innerHTML = '';
  let size = 30;

  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);

    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





















