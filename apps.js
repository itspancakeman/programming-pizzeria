// GLOBAL DOM AND VARIABLES
const game = document.getElementById('game');
const score = document.getElementById('score');
const failedOrders = document.getElementById('failed-orders');
const ctx = game.getContext('2d');
let customer
let player
const buttons = [];
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
    constructor(text, fillColor, textColor) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.text = text;
        this.fillColor = fillColor;
        this.textColor = textColor;
        
        this.draw = function() {
        //create button body
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        //create button text
        ctx.fillStyle = this.textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '20px papyrus';
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
        }
        
        this.setPosition = function(x, y) {
        this.x = x;
        this.y = y;
        }

        this.setSize = function(width, height) {
        this.width = width;
        this.height = height;
        }
        
        this.inBounds = function(mouseX, mouseY) {
            return (mouseX < this.x || mouseX > this.x + this.width || mouseY < this.y || mouseY > this.y + this.height);
        };
}};

// ================= KEYBOARD LOGIC =================
function movementHanlder(e) {
    if (e.key === 'ArrowUp' || e.key === 'w') {
    }
}


// ================= TIMER ===============
let timeLeft = 60;
let timer = document.getElementById('timer');

let timerId = setInterval(countdown, 1000);

function timesUp() {
    
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



// ================== GAME PROCESSES ===============
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    if (customer && customer.inside) {
    customer.render();    
    }

    function createButtons() {
        addNewButton = new Button('Round Crust', '#eeaa00', '#001122');
        addNewButton.setPosition(170, 400);
        addNewButton.setSize(200, 75);
        addNewButton.onClick = function() {
            return console.log('Round Crust added');
        };
        addNewButton.mouseOver = function() {
            ctx.strokeStyle = 'red';
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        };

        buttons.push(addNewButton);

        update();
    }
    function update() {

        buttons.forEach(button => button.draw());

        requestAnimationFrame(update);
    }
    game.addEventListener('click', function (event) {
        let x = event.pageX - (game.clientLeft + game.offsetLeft);
        let y = event.pageY - (game.clientTop + game.offsetTop);
        buttons.forEach(button => {
                if (button.inBounds(x, y) && button.onClick) button.onClick();
        });
    });
    game.addEventListener('mouseOver', (event) => {
        let x = event.pageX - (game.clientLeft + game.offsetLeft);
        let y = event.pageY - (game.clientTop + game.offsetTop);
        buttons.forEach(button => {
            if (button.inBounds(x, y) && !!button.mouseOver) button.mouseOver();
        });
    });


    createButtons();
}