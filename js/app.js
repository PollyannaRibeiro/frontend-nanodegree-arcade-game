// global variables
const allEnemies = [];
let eachEnemy;
let lives = 3;

const lifeInfo = document.createElement('h2');
lifeInfo.textContent = `${lives} lives`;
container.appendChild(lifeInfo);

// creating enemies

class Enemy{
    constructor(){
        this.sprite = 'images/enemy-bug.png';
        this.x = -101;
        this.col = Math.floor(Math.random()*(3-1+1)+1); // randomising position
        this.speed = Math.floor(Math.random()*(400-150+1)+150); // randomising the speed
        this.colisionRect = new Rect(0, 0, 95, 60);
    }

    update(dt) {
        this.x += dt * this.speed;
        this.colisionRect.x = this.x;
        this.colisionRect.y = this.colToY(this.col)+80;
    };

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.colToY(this.col));
    };

    colToY(col) {
        return (col * 83) - 33;
    }; 
}

setInterval(function(){ 
    eachEnemy = new Enemy();
    allEnemies.push(eachEnemy); 
    enemyRemoved(allEnemies);

}, Math.floor(Math.random()*(1500-1000+1)+1000)); // randomising the time that these enemies will be shown

// removing enemies that have already passed on the screen
function enemyRemoved(arr){
    if (arr[0].x>700){
        allEnemies.shift();
    }
}

// verifying collision

class Rect {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

function isCollided(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}

// creating player

class Player {
    constructor(){
        this.character = 'images/char-boy.png';
        this.collision = 'images/collision.png';
        this.row = Math.floor(Math.random()*(5)); 
        this.col = 5;
        this.colisionRect = new Rect(0, 0, 50, 50);
    }
    
    update(dt){

        this.colisionRect.x = this.rowToX(this.row)+25;
        this.colisionRect.y = this.colToY(this.col)+100;
        
        for (let i = 0; i<allEnemies.length; i++){
            if (isCollided(this.colisionRect, allEnemies[i].colisionRect)){
                // ctx.drawImage(Resources.get(this.collision), this.colisionRect.x, this.colisionRect.y);  >>>  working on that
                // console.log(this.collision);
                lives -= 1;
                if (lives === 1){
                    lifeInfo.textContent = `${lives} life`;
                } else {
                    lifeInfo.textContent = `${lives} lives`;
                }
                
                this.reset();
                if (lives === 0){
                   finalScreenDefeat();
                }  
            }
        } 
    }
    
    render(){
        ctx.drawImage(Resources.get(this.character), this.rowToX(this.row), this.colToY(this.col));
    }
    
    rowToX(row) {
        return row * 101;
    }
    
    colToY(col) {
        return (col * 83) - 33;
    }

    handleInput(key){
        switch (key) {
            case 'right': { 
                if (this.row>3){
                    break;
                }
                this.row +=1;
                break;
            } 
            case 'left': {
                if (this.row<1){
                    break;
                }
                this.row -=1;
                break;
            }
            case 'up':{
                if(this.col<1){
                    break;
                }
                this.col-=1;
                break;
            }
            case 'down':{
                if(this.col>4){
                    break;
                }
                this.col +=1;
                break;
            }    
        }
        this.score(); 
    }
    
    reset(){
        this.row = Math.floor(Math.random()*(5)); 
        this.col = 5;
    }
    
    score(){
        const player = this;
        if(this.col === 0){
            setTimeout(function(){
                finalScreenWon();
                // player.reset();
                
            }, 100);   
        }
    }

    changeCharacterer(characterer){
        this.character = characterer;
    }
}

const player = new Player();

// keyboard moves

document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
