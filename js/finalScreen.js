const p = document.createElement('p');

function finalScreen(){
    container.removeChild(document.querySelector('canvas'));
    container.removeChild(lifeInfo);
    const screen = document.createElement('div');
    screen.classList.add("screen");
    container.appendChild(screen);
    p.setAttribute('id', 'result');
    screen.appendChild(p);
}

function finalScreenWon(){
    finalScreen();
    p.textContent = "Congratulations, You won! :)";
}

function finalScreenDefeat(){
    finalScreen();
    p.textContent = "You lost! :(";
}
