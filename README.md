# programming-pizzeria

## directions
click with mouse to select the correct crust shape, sauce type, and topping to complete customer
orders. Completing orders correctly will increase the score by 100 points! Failed orders will
subtract 100 points from the score and increase the failed order counter. See how high you can
score in thirty seconds!

## about
My name is Collin and this is my first full project! I learned a whole lot and plan to continue making improvments as I learn more. Feel free to explore my commit history to see how the game has evolved over time. 

## goals
1. display functinoal game in browser
2. allow for player to compete against computer for high score
3. design logic for winning and visually communicating results
4. create seperate and connected HTML, CSS, and JavaScript files
5. display knowledge of DOM manipulation in JS file
6. deploy game online for the world to see
7. stick to semantic markup for HTML and CSS

## concept art
![wireframe-drawing](/images/wireframe-drawing.jpg "wireframe drawing")

## blockers
- I spent a considerable amount of time at the beginning of this project working out a way to use the canvas API to draw interactive buttons upon page load which proved to be a NIGHTMARE idea. This led to a pretty large restructure early on in development, I settled on regular HTML buttons created with DOM because those are wildly easier to use in every way.

`ctx.fillStyle = '#eeaa00';
ctx.fillRect(220, 400, 200, 75);
ctx.fillRect(170, 400, 200, 75);
ctx.fillStyle = '#001122';
ctx.textAlign = 'center';
ctx.font = '12px papyrus';
ctx.fillText('Round Crust', 320, 440, 200);
ctx.fillText('Round Crust', 270, 440, 200);`

- My blockers with canvas API only continued, as I tried to, after learning nothing I guess, to render text on screen using the canvas API instead of just creating a new element on the page like a smart person. Big upcoming goal for this project is to clean up the mess left behind by my own canvas creations.

## phase 2
My big upcoming goals are to make this really solid start to a frame as smooth as possible before moving onto the larger project of adding more images to the game. I want to eventually draw all my own icons (about half done) and integrate them into the game. My plan is to have everything be able to layer together so each order shows a different pizza on screen as well.