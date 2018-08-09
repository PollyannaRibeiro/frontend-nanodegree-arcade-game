

const container = document.getElementById('container');
const characteres = ['images/char-boy.png', "images/char-cat-girl.png", "images/char-horn-girl.png", "images/char-pink-girl.png", "images/char-princess-girl.png"];

function inicialScreen(){

    const screen = document.createElement('div');
    screen.classList.add("screen");
    container.appendChild(screen);
    const p = document.createElement('h1');
    p.textContent = "Choose your character:";
    p.setAttribute('id', 'info');
    screen.appendChild(p);
    

    for (let i = 0; i<characteres.length; i++){
        const img = document.createElement('img');
        img.classList.add('characteres');
        img.src = characteres[i];
        screen.appendChild(img);
    }
    
    selectingCharacter();

    const p2 = document.createElement('p');
    p2.textContent = "Take the player to the water avoiding the insects.";
    const p3 = document.createElement('p');
    p3.textContent = "You have 3 chances, good luck!";
    screen.appendChild(p2);
    screen.appendChild(p3);

}
// selecting characterer and starting the game

function selectingCharacter(){
    const definedCharacter = document.getElementsByClassName('characteres');
    for (let i = 0; i<definedCharacter.length; i++){
        definedCharacter[i].addEventListener('click', function(){
            
            definedCharacter[i].setAttribute('id', 'the-chosen-one');
            const selected = definedCharacter[i].getAttribute("src");

            container.removeChild(document.querySelector('.screen'));
            player.changeCharacterer(selected);
            document.querySelector('canvas').style.marginTop= '-50px';
        });
    }
}

inicialScreen();


