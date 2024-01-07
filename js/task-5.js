const bodyLocation = document.querySelector('body');
const buttonChange = bodyLocation.querySelector('.change-color');
const textOutput = bodyLocation.querySelector('.color');

buttonChange.addEventListener('click', () => {
  const colorNumber = getRandomHexColor();
  bodyLocation.style.backgroundColor = colorNumber;
  textOutput.textContent = colorNumber;
  
    function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
});







