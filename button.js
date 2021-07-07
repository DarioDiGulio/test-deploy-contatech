const button = document.getElementById('button');
const text = document.getElementsByTagName('p')[0]

button.addEventListener('click', () => {
    text.innerText = "Texto cambiado";
})