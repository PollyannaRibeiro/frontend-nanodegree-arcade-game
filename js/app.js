class Enemy{
    constructor(){
        this.sprite = 'images/enemy-bug.png';
        this.x = -101;
        this.col = Math.floor(Math.random()*(3-1+1)+1);
        this.speed = Math.floor(Math.random()*(400-150+1)+150);
    }

    
    update(dt) {
        this.x += dt * this.speed;
    };

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.colToY(this.col));
    };

    colToY(col) {
        return (col * 83) - 33;
    }; 
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
