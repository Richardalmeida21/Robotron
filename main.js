const btnSubtrair = document.querySelector('#subtrair');
const btnSomar = document.querySelector('#somar');

btnSomar.addEventListener('click', () => {manipularDados('somar')});
btnSubtrair.addEventListener('click', () => {manipularDados('subtrair')});

const controle = document.querySelectorAll('[data-controle]');

controle.forEach(element => {
    element.addEventListener('click', (event) => {
        manipularDados(event.target.dataset.controle, event.target.parentNode);
    });
});

function manipularDados(operacao, controle) {
    
    const peca = controle.querySelector('[data-contador]');

    if(operacao === '+') {
        peca.value = parseInt(peca.value) + 1;
    } else if(operacao === '-' && peca.value > 0) {
        peca.value = parseInt(peca.value) - 1;
    }
}