function finalScreenWon(){
    container.removeChild(document.querySelector('canvas'));
    const screen = document.createElement('div');
    screen.classList.add("screen");
    container.appendChild(screen);
    const p = document.createElement('p');
    p.textContent = "Congratulations! You won!";
    p.setAttribute('id', 'info');
    screen.appendChild(p);

}

function finalScreenDefeat(){
    container.removeChild(document.querySelector('canvas'));
    const screen = document.createElement('div');
    screen.classList.add("screen");
    container.appendChild(screen);
    const p = document.createElement('p');
    p.textContent = "You lost!";
    p.setAttribute('id', 'info');
    screen.appendChild(p);

}
