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


const allEnemies = [];
let eachEnemy;
setInterval(function(){ 
    eachEnemy = new Enemy();
    allEnemies.push(eachEnemy); 
    enemyRemoved(allEnemies);

}, Math.floor(Math.random()*(1500-1000+1)+1000));

function enemyRemoved(arr){
    if (arr[0].x>700){
        allEnemies.shift();
    }
}


class Player {
    constructor(){
        this.character = 'images/char-boy.png';
        this.collision = 'images/collision.png';
        this.row = Math.floor(Math.random()*(5)); 
        this.col = 5;
    }

    update(dt){

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
            console.log("ponto");
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



document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
