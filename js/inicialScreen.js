

const container = document.getElementById('container');
const characteres = ['images/char-boy.png', "images/char-cat-girl.png", "images/char-horn-girl.png", "images/char-pink-girl.png", "images/char-princess-girl.png"];

function inicialScreen(){
    const screen = document.createElement('div');
    screen.classList.add("screen");
    container.appendChild(screen);
    const p = document.createElement('p');
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
    p2.textContent = "You have 3 lifes, good luck!";
    screen.appendChild(p2);

}



function selectingCharacter(){
    const definedCharacter = document.getElementsByClassName('characteres');
    for (let i = 0; i<definedCharacter.length; i++){
        definedCharacter[i].addEventListener('click', function(){
            
            definedCharacter[i].setAttribute('id', 'the-chosen-one');
            const selected = definedCharacter[i].getAttribute("src");
            console.log(selected)  

            container.removeChild(document.querySelector('.screen'));
            player.changeCharacterer(selected);
            document.querySelector('canvas').style.marginTop= '-50px';
        });
    }
}

inicialScreen();


