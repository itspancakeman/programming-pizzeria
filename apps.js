// GLOBAL DOM AND VARIABLES
const game = document.getElementById('game');
const score = document.getElementById('score');
const failedOrders = document.getElementById('failed-orders');
const ctx = game.getContext('2d');
let customer
let player
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


// ================= KEYBOARD LOGIC =================




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
    console.log(customer);
    customer.render();    
    }
    // round crust button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(170, 400, 200, 75);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '12px papyrus';
    ctx.fillText('Round Crust', 270, 440, 200);
    // square crust button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(170, 500, 200, 75);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '12px papyrus';
    ctx.fillText('Square Crust', 270, 540, 200);
    // red sauce button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(375, 400, 200, 75);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '12px papyrus';
    ctx.fillText('Red Suace', 475, 440, 200);
    // white sauce button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(375, 500, 200, 75);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '12px papyrus';
    ctx.fillText('White Sauce', 475, 540, 200);
    // pepperoni button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(580, 400, 200, 75);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '12px papyrus';
    ctx.fillText('Pepperoni', 680, 440, 200);
    //ham button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(580, 500, 200, 75);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '12px papyrus';
    ctx.fillText('Ham', 680, 540, 200);
    //mushroom button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(785, 400, 200, 75);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '12px papyrus';
    ctx.fillText('Mushroom', 885, 440, 200);
    // green pepper button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(785, 500, 200, 75);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '12px papyrus';
    ctx.fillText('Green Pepper', 885, 540, 200);
    //submit button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(990, 445, 200, 75);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '12px papyrus';
    ctx.fillText('Submit Order', 1090, 485, 200);
}