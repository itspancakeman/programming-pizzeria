// GLOBAL DOM VARIABLES

// ============ STATIC ELEMENTS =============
const body = document.getElementsByTagName('body');
const main = document.querySelector('main');
const game = document.getElementById('game');
const gameContainer = document.getElementById('game-container');
const score = document.getElementById('score');
let scoreNumber = document.getElementById('score-number');
scoreNumber = 0;
let failedOrders = document.getElementById('failed-orders');
let failedOrderCount = document.getElementById('failed-order-count');
failedOrderCount = 0;
const ctx = game.getContext('2d');
let textContainer = document.getElementById('text-container');
let orderContainer = document.getElementById('order-container');
let bottomBlock = document.getElementById('btm-block');

// ========== START SCREEN =============
window.addEventListener('DOMContentLoaded', function() {

    var splashScreen = this.document.querySelector('#start-screen');
    splashScreen.addEventListener('click', () => {
        splashScreen.style.opacity = 0;
        setTimeout(() => {
            splashScreen.classList.add('hidden')
        },610)
        document.getElementById('game').style.display = '';
        buttons.map(button => button.showButton());
        initCustomer();
        const runGame = this.setInterval(gameLoop, 60);
    });
});

// =============== SETUP FOR CANVAS RENDERING ============
game.width = 1200; 
game.height = 600;

// ============= PLAYERS ===============
let customer
let player

// ============ PIZZA ARRAYS ===============
const crusts = ['Round', 'Square'];
const sauces = ['Red', 'White'];
const toppings = ['Pepperoni', 'Ham', 'Mushroom', 'Green Pepper'];

function makeOrder() {
    let randomIndex2 = Math.floor(Math.random() * (crusts.length));
    let crustSelection = crusts[randomIndex2];
            
    let randomIndex3 = Math.floor(Math.random() * (sauces.length));
    let sauceSelection = sauces[randomIndex3];
        
    let randomIndex4 = Math.floor(Math.random() * (toppings.length));
    let toppingsSelection = toppings[randomIndex4];

    let customerOrder = ('I would Like a ' + crustSelection + " pizza with " + sauceSelection + " sauce and " + toppingsSelection);

    let customerOrderElement = document.createElement('h3');
    customerOrderElement.textContent = customerOrder;
    orderContainer.appendChild(customerOrderElement);

    return crustSelection, sauceSelection, toppingsSelection;
}

let makeOrderRead = makeOrder();

console.log(makeOrderRead);

//============= BUTTON CLASS ================

class Button {
    constructor(top, left, text) {
        this.top = top;
        this.left = left;
        this.text = text;
        this.button = document.createElement('button')
    }
    createButton() {
        this.button.style.display = 'none';
        this.button.style.top = this.top + 'px';
        this.button.style.left = this.left + 'px';
        /* newButton.style.innerText = this.text; */
        this.button.style.backgroundColor = '#eeaa00';
        this.button.style.borderRadius = '12px';
       this.button.style.textColor = '#001122';
        this.button.style.padding = '15px 32px';
        this.button.style.textAlign = 'center';
        this.button.style.fontSize = '20px';
        this.button.style.position = 'absolute';
        this.button.style.width = '170px';
        this.button.style.textWrap = 'nowrap';
        let buttonText = document.createTextNode(this.text);
        this.button.appendChild(buttonText);
        document.body.appendChild(this.button);
        return this.button;
    }
    showButton() {
        this.button.style.display = '';
        return true;
    }
    hideButton() {
        this.button.style.display = 'none';
        return true;
    }
}

// ============== CUSTOMER CLASS ==================
class Customer {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.inside = true;

        this.render = function() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

// ============== BUTTON ARRAY ==============

const buttons = []

let roundCrust = new Button(390, 610, 'Round Crust');
let roundCrustButton = roundCrust.createButton();

let squareCrust = new Button(450, 610, 'Square Crust');
let squareCrustButton = squareCrust.createButton();

let redSauce = new Button(390, 790, 'Red Sauce');
let redSauceButton = redSauce.createButton();

let whiteSauce = new Button(450, 790, 'White Sauce');
let whiteSauceButton = whiteSauce.createButton();

let pepperoni = new Button(390, 970, 'Pepperoni');
let pepperoniButton = pepperoni.createButton();

let ham = new Button(450, 970, 'Ham');
let hamButton = ham.createButton();

let mushroom = new Button(390, 1150, 'Mushroom');
let mushroomButton = mushroom.createButton();

let greenPepper = new Button(450, 1150, 'Green Pepper');
let greenPepperButton = greenPepper.createButton();

let submitButton = new Button(510, 875, 'Submit Order');
let submitButtonButton = submitButton.createButton();

buttons.push(roundCrust);
buttons.push(squareCrust);
buttons.push(redSauce);
buttons.push(whiteSauce);
buttons.push(pepperoni);
buttons.push(ham);
buttons.push(mushroom);
buttons.push(greenPepper);
buttons.push(submitButton);

// =============== BUILDER PIZZA =================

let builderPizza = [];

console.log(builderPizza);

// ================= TIMER ===============
let timeLeft = 60;
let timer = document.getElementById('timer');

let timerId = setInterval(countdown, 1000);

function timesUp() {
    setTimeout(() => {
        gameContainer.classList.add('hidden')
        buttons.forEach(button => button.hideButton());
    }, 500);
    var endScreen = this.document.querySelector('#end-screen');
    endScreen.classList.remove('hidden');
    let finalScore = this.document.createElement('p');
    finalScore.innerText = ('Final score: ' + scoreNumber)
    endScreen.appendChild(finalScore);

    endScreen.addEventListener('click', () => {
        location.reload();
    })

}

function countdown() {
    if (timeLeft === 0) {
        clearTimeout(timerId);
        timesUp();
    } else {
        timer.innerHTML = timeLeft + ' seconds left';
        timeLeft--;
    } 
}

// =============== INITIALIZE CUTSOMER =================
function initCustomer() {
    ctx.clearRect(0, 0, game.width, game.height);
    setTimeout(function() {
        const spawnAreaW = (game.width - 400);
        const spawnAreaH = (game.height - 300);
        let randomX = Math.floor(Math.random() * (spawnAreaW - 75));
        let randomY = Math.floor(Math.random() * (spawnAreaH - 120));
        const colors = ['#FFA07A', '#FF1493', '#FF8C00', '#FFD700', '#DA70D6', '#008080', '#48D1CC', '#8B4513', '#696969'];
        let randomIndex = Math.floor(Math.random() * (colors.length -1));
        let randomColor = colors[randomIndex];
        customer = new Customer(randomX, randomY, randomColor, 75, 120);
    }, 500);
    makeOrder();
    return true;
}

// ================== GAME LOOP ===============
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    if (customer && customer.inside) {
    customer.render();
    }
}

// ========== ROUND CRUST BUTTON ==============

function crustButtonPress() {
    bottomBlock.innerHTML = '';
    let buildArea = document.createElement('h3');
    let buildAreaText = document.createTextNode(crusts[0] + ' Crust added');
    buildArea.appendChild(buildAreaText);
    bottomBlock.appendChild(buildArea);

    builderPizza.push(crusts[0]);
}

// ========== SQUARE CRUST BUTTON ==============

function crustButtonPress2() {
    bottomBlock.innerHTML = '';
    let buildArea2 = document.createElement('h3');
    let buildAreaText2 = document.createTextNode(crusts[1] + ' Crust added');
    buildArea2.appendChild(buildAreaText2);
    bottomBlock.appendChild(buildArea2);

    builderPizza.push(crusts[1]);
}

// ========== RED SAUCE BUTTON ==============

function sauceButtonPress() {
    bottomBlock.innerHTML = '';
    let buildArea3 = document.createElement('h3');
    let buildAreaText3 = document.createTextNode(sauces[0] + ' Sauce added');
    buildArea3.appendChild(buildAreaText3);
    bottomBlock.appendChild(buildArea3);

    builderPizza.push(sauces[0]);
}

// ========== WHITE SUACE BUTTON ==============

function sauceButtonPress2() {
    bottomBlock.innerHTML = '';
    let buildArea4 = document.createElement('h3');
    let buildAreaText4 = document.createTextNode(sauces[1] + ' Sauce added');
    buildArea4.appendChild(buildAreaText4);
    bottomBlock.appendChild(buildArea4);

    builderPizza.push(sauces[1]);
}

// ========== PEPPERONI BUTTON ==============

function meatButtonPress() {
    bottomBlock.innerHTML = '';
    let buildArea5 = document.createElement('h3');
    let buildAreaText5 = document.createTextNode(toppings[0] + ' added');
    buildArea5.appendChild(buildAreaText5);
    bottomBlock.appendChild(buildArea5);

    builderPizza.push(toppings[0]);
}

// ========== HAM BUTTON ==============

function meatButtonPress2() {
    bottomBlock.innerHTML = '';
    let buildArea6 = document.createElement('h3');
    let buildAreaText6 = document.createTextNode(toppings[1] + ' added');
    buildArea6.appendChild(buildAreaText6);
    bottomBlock.appendChild(buildArea6);

    builderPizza.push(toppings[1]);
}

// ========== MUSHROOM BUTTON ==============

function vegButtonPress() {
    bottomBlock.innerHTML = '';
    let buildArea7 = document.createElement('h3');
    let buildAreaText7 = document.createTextNode(toppings[2] + ' added');
    buildArea7.appendChild(buildAreaText7);
    bottomBlock.appendChild(buildArea7);

    builderPizza.push(toppings[2]);
}

// ========== GREEN PEPPER BUTTON ==============

function vegButtonPress2() {
    bottomBlock.innerHTML = '';
    let buildArea8 = document.createElement('h3');
    let buildAreaText8 = document.createTextNode(toppings[3] + ' added');
    buildArea8.appendChild(buildAreaText8);
    bottomBlock.appendChild(buildArea8);

    builderPizza.push(toppings[3]);
}

// ========== SUBMIT BUTTON ==============

function submitButtonPress() {
    bottomBlock.innerHTML = '';
    let buildArea9 = document.createElement('h3');
    let buildAreaText9 = document.createTextNode('Order Submitted!');
    buildArea9.appendChild(buildAreaText9);
    bottomBlock.appendChild(buildArea9);

    if (crustSelection === builderPizza[0] && sauceSelection === builderPizza[1] && toppingsSelection === builderPizza[2]) {
        scoreNumber += 100;
        score.innerText = scoreNumber;
    } else {
        failedOrderCount += 1;
        failedOrders.innerText = 'Failed Orders: ' + failedOrderCount;
        scoreNumber -= 100;
        score.innerText = scoreNumber;
    }

    builderPizza = [];
    initCustomer();
    gameLoop();
}

// ========== BUTTON EVENT LISTENERS ==============

roundCrustButton.addEventListener('click', crustButtonPress);
squareCrustButton.addEventListener('click', crustButtonPress2);
redSauceButton.addEventListener('click', sauceButtonPress);
whiteSauceButton.addEventListener('click', sauceButtonPress2);
pepperoniButton.addEventListener('click', meatButtonPress);
hamButton.addEventListener('click', meatButtonPress2);
mushroomButton.addEventListener('click', vegButtonPress);
greenPepperButton.addEventListener('click', vegButtonPress2);
submitButtonButton.addEventListener('click', submitButtonPress);

