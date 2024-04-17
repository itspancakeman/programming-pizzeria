// GLOBAL DOM AND VARIABLES
const body = document.getElementsByTagName('body');
const main = document.querySelector('main');
const game = document.getElementById('game');
const score = document.getElementById('score');
const failedOrders = document.getElementById('failed-orders');
const ctx = game.getContext('2d');
let customer
let player
let textContainer = document.getElementById('text-container');
let bottomBlock = document.getElementById('btm-block');
/* const buttons = []; */
/* gameLeft = game.offsetLeft + game.clientLeft,
gameTop = game.offsetTop + game.clientTop, */



const crusts = ['round', 'square'];
const sauces = ['red', 'white'];
const toppings = ['pepperoni', 'ham', 'mushroom', 'green pepper'];



// ========== START SCREEN =============
window.addEventListener('DOMContentLoaded', function() {

    var splashScreen = this.document.querySelector('#start-screen');
    splashScreen.addEventListener('click', () => {
        splashScreen.style.opacity = 0;
        setTimeout(() => {
            splashScreen.classList.add('hidden')
        },610)
        document.getElementById('game').style.display = '';
        initCustomer();
        const runGame = this.setInterval(gameLoop, 60);
    });
});

document.addEventListener('keydown', movementHanlder);

// =============== SETUP FOR CANVAS RENDERING ============
game.width = 1200; 
game.height = 600;

// ============== ENTITIES ==================
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
            ctx.textAlign = 'left';
            ctx.font = '20px papyrus';
            ctx.fillText((customerOrder), (this.x - 20), (this.y - 20));
        }
    }
}

class Button {
    constructor(top, left, text) {
        this.top = top;
        this.left = left;
        this.text = text;
    }
    createButton() {
        let newButton = document.createElement('button');
        newButton.style.top = this.top + 'px';
        newButton.style.left = this.left + 'px';
        /* newButton.style.innerText = this.text; */
        newButton.style.backgroundColor = '#eeaa00';
        newButton.style.borderRadius = '12px';
        newButton.style.textColor = '#001122';
        newButton.style.padding = '15px 32px';
        newButton.style.textAlign = 'center';
        newButton.style.fontSize = '20px';
        newButton.style.position = 'absolute';
        newButton.style.width = '170px';
        newButton.style.textWrap = 'nowrap';
        let buttonText = document.createTextNode(this.text);
        newButton.appendChild(buttonText);
        document.body.appendChild(newButton);
        return newButton;
    }
}

/* class Button {
    constructor(x, y, text) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.width = 200;
        this.height = 75;
        this.fillColor = '#eeaa00';
        this.textColor = '#001122';
        this.clicked = false;
    }

    draw() {
        ctx.fillStyle = '#eeaa00';
        ctx.fillRect(this.x, this.y, 200, 75);

        ctx.fillStyle = '#001122';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '20px papyrus';
        ctx.fillText(this.text, this.x + 200 / 2 , this.y + 75 / 2);
    }
        
    inBounds(mX, mY) {
        return (mX >= this.x && mX <= this.x + this.width && mY >= this.y && mY <= this.y + this.height);
    }
        
    handleClick() {
        if (!this.clicked && this.onClick) {
            this.onClick();
            this.clicked = true;
    }
}
    mouseOver() {
        console.log(`${this.text} mouseOver`);
    }
} */

// ================= KEYBOARD LOGIC =================
function movementHanlder(e) {
    if (e.key === 'ArrowUp' || e.key === 'w') {
    }
}


// ================= TIMER ===============
let timeLeft = 90;
let timer = document.getElementById('timer');

let timerId = setInterval(countdown, 1000);

function timesUp() {
    setTimeout(() => {
        game.classList.add('hidden')
    }, 500);
    var endScreen = this.document.querySelector('#end-screen');
    endScreen.classList.remove('hidden');
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





// =============== HELPER FUNCTIONS =================
function initCustomer() {
    
    setTimeout(function() {
        const spawnAreaW = (game.width - 400);
        const spawnAreaH = (game.height - 300);
        let randomX = Math.floor(Math.random() * (spawnAreaW - 75));
        let randomY = Math.floor(Math.random() * (spawnAreaH - 120));
        const colors = ['#FFA07A', '#FF1493', '#FF8C00', '#FFD700', '#DA70D6', '#008080', '#48D1CC', '#8B4513', '#696969'];
        let randomIndex = Math.floor(Math.random() * (colors.length -1));
        let randomColor = colors[randomIndex];
        customer = new Customer(randomX, randomY, randomColor, 75, 120);
    }, 500)
    
    return true;

}

const randomIndex2 = Math.floor(Math.random() * (crusts.length));
const crustSelection = crusts[randomIndex2];

const randomIndex3 = Math.floor(Math.random() * (sauces.length));
const sauceSelection = sauces[randomIndex3];

const randomIndex4 = Math.floor(Math.random() * (toppings.length));
const toppingsSelection = toppings[randomIndex4];

const customerOrder = ('I would Like a ' + crustSelection + " pizza with " + sauceSelection + " sauce and " + toppingsSelection);



// =========== BUTTON STUFF ==============

const buttons = []

let roundCrust = new Button(390, 150, 'Round Crust');
let roundCrustButton = roundCrust.createButton();

let squareCrust = new Button(450, 150, 'Square Crust');
let squareCrustButton = squareCrust.createButton();

let redSauce = new Button(390, 325, 'Red Sauce');
let redSauceButton = redSauce.createButton();

let whiteSauce = new Button(450, 325, 'White Sauce');
let whiteSauceButton = whiteSauce.createButton();

let pepperoni = new Button(390, 500, 'Pepperoni');
let pepperoniButton = pepperoni.createButton();

let ham = new Button(450, 500, 'Ham');
let hamButton = ham.createButton();

let mushroom = new Button(390, 675, 'Mushroom');
let mushroomButton = mushroom.createButton();

let greenPepper = new Button(450, 675, 'Green Pepper');
let greenPepperButton = greenPepper.createButton();

let submitButton = new Button(507, 400, 'Submit Order');
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

// ================== GAME PROCESSES ===============
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    if (customer && customer.inside) {
    customer.render();    
    }
}

function crustButtonPress() {
    let buildArea = document.createElement('p');
    let buildAreaText = document.createTextNode('Round Crust added');
    buildArea.appendChild(buildAreaText);
    bottomBlock.appendChild(buildArea);
}

function crustButtonPress2() {
    let buildArea2 = document.createElement('p');
    let buildAreaText2 = document.createTextNode('Square Crust Added');
    buildArea2.appendChild(buildAreaText2);
    bottomBlock.appendChild(buildArea2);
}

function sauceButtonPress() {
    let buildArea3 = document.createElement('p');
    let buildAreaText3 = document.createTextNode('Red Sauce added');
    buildArea3.appendChild(buildAreaText3);
    bottomBlock.appendChild(buildArea3);
}

function sauceButtonPress2() {
    let buildArea4 = document.createElement('p');
    let buildAreaText4 = document.createTextNode('White Sauce added');
    buildArea4.appendChild(buildAreaText4);
    bottomBlock.appendChild(buildArea4);
}

function meatButtonPress() {
    let buildArea5 = document.createElement('p');
    let buildAreaText5 = document.createTextNode('Pepperoni added');
    buildArea5.appendChild(buildAreaText5);
    bottomBlock.appendChild(buildArea5);
}

function meatButtonPress2() {
    let buildArea6 = document.createElement('p');
    let buildAreaText6 = document.createTextNode('Ham added');
    buildArea6.appendChild(buildAreaText6);
    bottomBlock.appendChild(buildArea6);
}

function vegButtonPress() {
    let buildArea7 = document.createElement('p');
    let buildAreaText7 = document.createTextNode('Mushroom added');
    buildArea7.appendChild(buildAreaText7);
    bottomBlock.appendChild(buildArea7);
}

function vegButtonPress2() {
    let buildArea8 = document.createElement('p');
    let buildAreaText8 = document.createTextNode('Green Pepper added');
    buildArea8.appendChild(buildAreaText8);
    bottomBlock.appendChild(buildArea8);
}

function submitButtonPress() {
    bottomBlock.innerHTML = '';
    let buildArea9 = document.createElement('p');
    let buildAreaText9 = document.createTextNode('Order Submitted!');
    buildArea9.appendChild(buildAreaText9);
    bottomBlock.appendChild(buildArea9);
}

roundCrustButton.addEventListener('click', crustButtonPress);
squareCrustButton.addEventListener('click', crustButtonPress2);
redSauceButton.addEventListener('click', sauceButtonPress);
whiteSauceButton.addEventListener('click', sauceButtonPress2);
pepperoniButton.addEventListener('click', meatButtonPress);
hamButton.addEventListener('click', meatButtonPress2);
mushroomButton.addEventListener('click', vegButtonPress);
greenPepperButton.addEventListener('click', vegButtonPress2);
submitButtonButton.addEventListener('click', submitButtonPress);

    /* function createButtons() {
        //round crust button
        addNewButton = new Button(170, 400, 'Round Crust');
        addNewButton.onClick = function() {
            return console.log('Round Crust added');
        };

        //square crust button
        addNewButton2 = new Button(170, 500, 'Square Crust');
        addNewButton2.onClick = function() {
            return console.log('Square Crust added');
        }

        //red sauce button
        addNewButton3 = new Button(375, 400, 'Red Sauce');
        addNewButton3.onClick = function() {
            return console.log('Red Sauce added');
        }

        //white sauce button
        addNewButton4 = new Button(375, 500, 'White Sauce');
        addNewButton4.onClick = function() {
            return console.log('White Sauce added');
        }

        //pepperoni button
        addNewButton5 = new Button(580, 400, 'Pepperoni');
        addNewButton5.onclick = function() {
            return console.log('Pepperoni added');
        }

        //ham button
        addNewButton6 = new Button(580, 500, 'Ham');
        addNewButton6.onClick = function() {
            return console.log('Ham added');
        }

        //mushroom button
        addNewButton7 = new Button(785, 400, 'Mushroom');
        addNewButton7.onClick = function() {
            return console.log('Mushroom added');
        }

        //green pepper button
        addNewButton8 = new Button(785, 500, 'Green Pepper');
        addNewButton8.onClick = function() {
            return console.log('Green Pepper added');
        }

        //submit order button
        addNewButton9 = new Button(990, 445, 'Submit Order');
        addNewButton9.onClick = function() {
            return console.log('Order submitted');
        }

        //push statements
        buttons.push(addNewButton);
        buttons.push(addNewButton2);
        buttons.push(addNewButton3);
        buttons.push(addNewButton4);
        buttons.push(addNewButton5);
        buttons.push(addNewButton6);
        buttons.push(addNewButton7);
        buttons.push(addNewButton8);
        buttons.push(addNewButton9);

        update();
    }

    function update() {
        buttons.forEach(button => button.draw());



        requestAnimationFrame(update);


    }

    game.addEventListener('click', function (event) {
        let x = event.pageX
        let y = event.pageY
        buttons.forEach(button => {
            if (button.inBounds(x, y)) {
                button.handleClick();
            }
        });
    });
    game.addEventListener('mousemove', (event) => {
        let x = event.pageX - (game.clientLeft + game.offsetLeft);
        let y = event.pageY - (game.clientTop + game.offsetTop);
        buttons.forEach(button => {
            if (button.inBounds(x, y) && !!button.mouseOver) button.mouseOver();
        });
    });


    createButtons();
} */