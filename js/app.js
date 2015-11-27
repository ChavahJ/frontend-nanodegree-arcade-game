// APP.JS
// This is where the game entities are instantiated, updated, and drawn.

// ENEMIES
// The creation of an Enemy prototype, with basic characteristics defined.
// Basic characteristics include the enemy image, location, and speed.

var Enemy = function(x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = 100;
};

/* The enemy position must be updated to create the "flipbook" effect.
 * When the enemy reaches the end of the board, it must go back to zero on the
 * x-axis and start again. The parameter for this function is dt, which
 * represents a time delta between ticks. The dt parameter is defined in the
 * engine.js file.
 */
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt;
    if (this.x >= 505) {
        this.x = 0;
    }
};

// The render function taps into resources.js so images are cached during play.
Enemy.prototype.render = function() {
    ctx.drawImage(resources.get(this.sprite), this.x, this.y);
};

/* PLAYER
 * This includes creating a Player prototype, with basic characteristics
 * defined, such as the image and location. The player entity does not need
 * a speed defined, since it will be moving according to user input.
*/
var Player = function (x, y) {
    this.sprite = 'images/char-princess-girl.png';
    this.x = x;
    this.y = y;
};

/* The player position is determined by input from the user, but the player is
 * not allowed to leave the board. Once the player reaches the end of the board,
 * she needs to return to her starting position. The player will also
 * return to her starting position if she collides with an enemy.
 */
Player.prototype.update = function(dt) {
    if (this.y === -83){
        this.x = 202;
        this.y = 415;
    }

    /* If the player image occupies the same square as an enemy image, then
     * the player will appear in her starting position.
     */
 
};

//The render function taps into resources.js so images are cached during play.
Player.prototype.render = function() {
    ctx.drawImage(resources.get(this.sprite), this.x, this.y);
};

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch
// This details how the event listener should handle user input.
// The "if" statements ensure that the player cannot leave the board.
Player.prototype.handleInput = function(location) {
    switch (location) {
        case 'left':
            this.x -= 101;
            if (this.x <= 0) {
                this.x = 0;
            }
        break;

        case 'up':
            this.y -= 83;
        break;

        case 'right':
            this.x += 101;
            if (this.x >= 404) {
                this.x = 404;
            }
        break;

        case 'down':
            this.y += 83;
            if (this.y >= 416) {
                this.y = 416
            }
        break;
    }
};

// Instantiation of all objects.
// Enemy objects have been placed in an array called allEnemies.
// The player object is created in a variable called player.

var enemy1 = new Enemy(0, 83);
var enemy2 = new Enemy(101, 166);
var enemy3 = new Enemy(202, 249);

allEnemies = [enemy1, enemy2, enemy3];

var player = new Player(202, 415);


// The program needs to know which keystrokes it should "listen" to.
// The event handler function above will reference this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
