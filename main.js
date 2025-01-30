const btnSubtrair = document.querySelector('#subtrair');
const btnSomar = document.querySelector('#somar');

btnSomar.addEventListener('click', () => {manipularDados('somar')});
btnSubtrair.addEventListener('click', () => {manipularDados('subtrair')});

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach(element => {
    element.addEventListener('click', (event) => {
        manipularDados(event.target.textContent, event.target.parentNode);
    });
});

function manipularDados(operacao, controle) {
    
    const peca = controle.querySelector('.controle-contador');

    if(operacao === '+') {
        peca.value = parseInt(peca.value) + 1;
    } else if(operacao === '-' && peca.value > 0) {
        peca.value = parseInt(peca.value) - 1;
    }
}