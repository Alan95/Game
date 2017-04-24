// Enemies our player must avoid
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.y = y;
    this.x = x;
    this.speed = Math.random() * 400;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    this.x += this.speed * dt;
    
    if (this.x > 505) {
        
        this.speed = Math.random() * 300 + 150;
        this.x = 0;
        
    }
    
    collectionHandler(this);
    
};





// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



var Star = function(x, y) {
    
    this.sprite = 'images/Star.png';
    this.x = x;
    this.y = y;
    
};


Star.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Star.prototype.update = function () {
    
   starCollision(this); 
};


var starCollision = function(star) {
     
    if(player.x < star.x + 30  && star.x < player.x + 30 && player.y < star.y + 50 && star.y < player.y + 50){
        console.log("collision");
        star.y = 1000;
    }
    
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player  = function(speed) {
    
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    this.speed = speed;
    this.level = 0;
    
};

Player.prototype.update = function(dt) {
    
    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    
    
  
    
    switch(key) {
            
        case 'left': this.x -= this.speed;
                    break;
        case 'right': this.x += this.speed;
                    break;
        case 'up': this.y -= this.speed;
                    break;
        case 'down': this.y += this.speed;
                    break;
    
      }
    
    
    if(this.y < 0) {
        starUpdate(star);
        this.y = 400;
        
        
    }
    
};

var starUpdate = function(star) {
    
    star.x = Math.random() * 200;
    star.y = Math.random() * 300;
};

var collectionHandler = function(eneme) {
    
    if(player.x < eneme.x +30  && eneme.x < player.x + 30 && player.y < eneme.y + 50 && eneme.y < player.y + 50){
        
        starUpdate(star);
        player.y = 400;
    }
    
    
    
    if(player.y > 383) {
    player.y = 383;
    }
    
    if(player.x > 402.5){
    player.x = 402.5;
    }
    
    if(player.x < 2.5){
    player.x = 2.5;
    }
    
    
   
    
    
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(50);
var Enemy1 = new Enemy(0, 50);
var Enemy2 = new Enemy(20, 140);
var Enemy3 = new Enemy(20, 220);
var star = new Star(50, 220);
var allEnemies = [];
allEnemies.push(Enemy1, Enemy2, Enemy3);







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
