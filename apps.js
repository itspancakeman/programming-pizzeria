// GLOBAL DOM AND VARIABLES
const game = document.getElementById('game');
const score = document.getElementById('score');
const failedOrders = document.getElementById('failed-orders');
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
    });
});

// =============== SETUP FOR CANVAS RENDERING ============




// ============== ENTITIES ==================
class Customer {
    constructor(x, y, img, width, height) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.width = width;
        this.height = height;

    }
}



// ================= KEYBOARD LOGIC =================




// =============== HELPER FUNCTIONS =================





// ================== GAME PROCESSES ===============

