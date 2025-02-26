
let runGame = () => {
    let gameList = document.getElementById('game-list');
    let addGame = [];
    
    let gameData = JSON.parse(JSON.stringify(data.games))
    
    // addGame.append(gameList);
    for(let i = 0; i < gameData.length; i++)
    {
        addGame[i] = document.createElement("li");
        addGame[i].setAttribute('id', gameList);
        let textNode = document.createTextNode(gameData[i].context);
        addGame[i].appendChild(textNode);
        addGame[i].classList.add("game-viewer");
        gameList.appendChild(addGame[i]);
    }
    

    let game = document.getElementsByClassName('game-viewer');
        
    for(let i = 0; i < game.length; i++)
    {
        game[i].addEventListener('click', () => {
            location.href = gameData[i].link;
        });
    }
    
    
}

runGame();