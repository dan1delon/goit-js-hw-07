const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input', (event) => {
    const trimmedValue = event.currentTarget.value.trim();
    if (trimmedValue === '') {
        outputName.textContent = 'Anonymous'
    } else {
        outputName.textContent = trimmedValue;
    }
})