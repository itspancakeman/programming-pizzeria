// GLOBAL DOM AND VARIABLES
const game = document.getElementById('game');
const score = document.getElementById('score');
const failedOrders = document.getElementById('failed-orders');
const ctx = game.getContext('2d');
let customer
let player



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
        }
    }
}


// ================= KEYBOARD LOGIC =================




// =============== HELPER FUNCTIONS =================
function initCustomer() {
    setTimeout(function() {
        let randomX = Math.floor(Math.random() * (game.width - 75));
        let randomY = Math.floor(Math.random() * (game.height - 120));
        const colors = ['#7BD3EA', 'A1EEBD', 'F6F7C4', 'F6D6D6'];
        let randomIndex = Math.floor(Math.random() * (colors.length -1));
        let randomColor = colors[randomIndex];
        customer = new Customer(randomX, randomY, randomColor, 75, 120);
    }, 500)
    
    return true;

}

// =========== BUTTON SETUP ================
ctx.fillStyle = '#eeaa00';
ctx.fillRect(110, 50, 100, 37);
ctx.fillStyle = '#001122';
ctx.textAlign = 'center';
ctx.font = '12px papyrus';
ctx.fillText('Round Crust', 320, 145, 200);



// ================== GAME PROCESSES ===============
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    if (customer && customer.inside) {
    console.log(customer);
    customer.render();    
    }
    // round crust button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(220, 400, 200, 75);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '12px papyrus';
    ctx.fillText('Round Crust', 320, 440, 200);
    // square crust button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(220, 500, 200, 75);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '12px papyrus';
    ctx.fillText('Square Crust', 320, 540, 200);
    // red sauce button
}