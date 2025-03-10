window.onload = () => {
    let setNum = document.getElementById('set-num');
    let setBtn = document.getElementById("setting-btn");
    let reSetBtn = document.getElementById("reset");
    let getNum = document.getElementById("get-num");
    let getBoard = document.getElementById("game-board");
    let playBall = document.getElementById('play-ball');
    let getGround = document.getElementById("ground");
    let getResult = document.getElementById("result");

    let addSelect = [];
    let addPlay = [];
    let addPlayNum = [];
    let addNumber = [];

    let numArr = []
    let ballArr = []
    let res = {
        ball: 0, strike: 0, out: 0
    }

    for(let i = 0; i < 4; i++)
    {
        addSelect[i] = document.createElement("select");
        addSelect[i].setAttribute('id', "num" + i);
        addPlay[i] = document.createElement("select");
        addPlay[i].setAttribute('id', "play" + i);
        setNum.appendChild(addSelect[i]);
        getGround.appendChild(addPlay[i]);
    }

    for(let index = 0; index < addSelect.length; index++)
    {
       for(let i = 0; i < 10; i++)
       {
            addNumber[i] = document.createElement("option");
            addNumber[i].value = i;
            addNumber[i].appendChild(document.createTextNode(i));
            addSelect[index].appendChild(addNumber[i]);

            addPlayNum[i] = document.createElement("option");
            addPlayNum[i].value = i;
            addPlayNum[i].appendChild(document.createTextNode(i));
            addPlay[index].appendChild(addPlayNum[i]);
       }
    }


    let checkNum = (arr) => {
        let i = 0;

        while(i < arr.length)
        {
            let j = 0
            while(j < arr.length)
            {
                if(arr[i] == arr[i+1])
                {
                    alert("같은 수가 있습니다.");
                    return false;
                }
                j++;
            }
            i++;
        }
        return true;
    }

    setBtn.addEventListener('click', () => {
        for(let index = 0; index < addSelect.length; index++)
            numArr[index] = addSelect[index].value;
        
        if(checkNum(numArr))
        {
            getBoard.classList.remove('my-hidden');
            getNum.appendChild(document.createTextNode(numArr.toString()));
            setNum.classList.add('my-hidden');
            setBtn.classList.add('my-hidden');
        }
    });


    reSetBtn.addEventListener('click', () => {
        setNum.classList.remove('my-hidden');
        setBtn.classList.remove('my-hidden');
        getBoard.classList.add('my-hidden');
        location.reload()
    });

    let searchStrike = (playArr, targetArr) => {
        for(let i = 0; i < playArr.length; i++)
        {
            for(let j = 0; j < targetArr.length; j++)
            {
                if(playArr[i] == targetArr[j])
                {
                    if(i == j)  {
                        res.strike++;
                        break;
                    }
                    else {
                        res.ball++;
                        break;
                    }
                }
                if(j == targetArr.length-1) res.out++;
            }
        }
        let newDiv = document.createElement('div');
        newDiv.appendChild( document.createTextNode("스트라이크: " + res.strike + ", " + "아웃: " + res.out + ", " + "볼 :" + res.ball));
        getResult.appendChild(newDiv);
    }
    

    playBall.addEventListener('click', () => {
        for(let index = 0; index < addPlay.length; index++)
            ballArr[index] = addPlay[index].value;
        

       if(checkNum(ballArr))
       {
            searchStrike(ballArr, numArr);

            res.strike = 0;
            res.ball = 0;
            res.out = 0
        }
    })
}
