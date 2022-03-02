let order = [];
let clickedOrder = [];
let score;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');
const darkblue = document.querySelector('.darkblue');
const violet = document.querySelector('.violet');
const brown = document.querySelector('.brown');
const gold = document.querySelector('.gold');
const silver = document.querySelector('.silver');

// 0 verde, 1 vermelho, 2 amarelo, 3 azul, 4 orange, 5 darkblue, 6 violet, 7 brown, 8 gold, 9 silver

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 10);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500
    console.log(number);
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number + 100);
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        score++;
        alert(`Pontuação: ${score}\n Nice! Vamos para o próximo nível!`);
        
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250)
}

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    } else if (color == 4) {
        return orange;
    } else if (color == 5) {
        return darkblue
    } else if (color == 6) {
        return violet
    } else if (color == 7) {
        return brown
    } else if (color == 8) {
        return gold
    } else if (color == 9) {
        return silver
    }
}

let nextLevel = () => {
    
    shuffleOrder();
}

let gameOver = () => {
    alert(`Você errou!\n Sua pontuação final foi: ${score}!`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Evil Genius! \n Iniciando novo jogo...')
    score = 0;

    shuffleOrder();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
orange.onclick = () => click(4);
darkblue.onclick = () => click(5);
violet.onclick = () => click(6);
brown.onclick = () => click(7);
gold.onclick = () => click(8);
silver.onclick = () => click(9);

playGame();