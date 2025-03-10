
let runGame = () => {
    let gameList = document.getElementById('game-list');
    let getContainer = document.getElementById("container");

    let colDiv = [];
    let rowDiv = [];
    
    let cnt = 0;
    let img;
    let title;
    let addGame = [];
    
    let gameData = JSON.parse(JSON.stringify(data.games));

    let windowSize = window.innerWidth;
    let setGrid;

    
    if(windowSize > 960)  setGrid = 3;
    else if(windowSize <= 960) setGrid = 2;
    console.log(setGrid);

    //add column
    for(let i = 0; i < gameData.length / setGrid; i++)
    {
        colDiv[i] = document.createElement("div");
        colDiv[i].classList.add('col');
        getContainer.appendChild(colDiv[i]);
    }

    //add row
    for(let i = 0; i < gameData.length/setGrid; i++)
    {
        for(let j = 0; j < setGrid; j++)
        {
            if(gameData[cnt] === undefined) break;

            rowDiv[j] = document.createElement("div");
            rowDiv[j].classList.add('row');
            title = document.createElement('div');
            title.appendChild(document.createTextNode(gameData[cnt].context));
            title.classList.add("game-title");

            addGame[j] = document.createElement('div');
            if(gameData[cnt].link != "none")
                addGame[j].classList.add('on-game');
            else addGame[j].classList.add('off-game');
            addGame[j].classList.add('game-viewer');
            img =  document.createElement('img');
            img.classList.add('game-img')
            img.src = gameData[cnt++].src;
            addGame[j].appendChild(title);
            addGame[j].appendChild(img);

            rowDiv[j].appendChild(addGame[j]);
            colDiv[i].appendChild(rowDiv[j]);
        }
    }

    

    let game = document.getElementsByClassName('on-game');
        
    for(let i = 0; i < game.length; i++)
    {
        game[i].addEventListener('click', () => {
            location.href = gameData[i].link;
        });

    }
    
    
}


runGame();