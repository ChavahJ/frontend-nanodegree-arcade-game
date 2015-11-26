//ENEMIES
var Enemy = function(x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt;

    if (this.x >= 404) {
        this.x = 0;
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(resources.get(this.sprite), this.x, this.y);
};

//PLAYER
var Player = function (x, y) {
    this.sprite = 'images/char-princess-girl.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(dt) {
    //add code here
};

Player.prototype.render = function() {
    ctx.drawImage(resources.get(this.sprite), this.x, this.y);
};

//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch
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
            if (this.y <= 0) {
                this.y = 0;
            }
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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy1 = new Enemy(0, 83);
var enemy2 = new Enemy(101, 166);
var enemy3 = new Enemy(202, 249);

allEnemies = [enemy1, enemy2, enemy3];

var player = new Player(202, 415);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
