var squares = document.querySelectorAll(".square");
var tiles = document.querySelectorAll('.tile-inner');

var gameMatrix = [[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]];

var isWin = false;

function checkWinCondition() {
    for (i = 0; i < gameMatrix.length; i++){
        if (gameMatrix[i].includes(1024)){
            return true;
        }
    }
    return false;
}

function randomize() {
    var m = [2, 2, 2, 2, 4];
    do {
        var x = Math.floor(Math.random() * 4);
        var y = Math.floor(Math.random() * 4);
    }
    while (gameMatrix[x][y] !== 0);
    gameMatrix[x][y] = m[Math.floor(Math.random() * 5)];

    var count = 0;
    for (i = 0; i < gameMatrix.length; i++) {
        for (j = 0; j < gameMatrix[i].length; j++) {
            if (x === i && y === j) {
                squares[count].style.background = '#81a2be';
                tiles[count].innerHTML = gameMatrix[i][j];
            }
            count++;
        }
    }
}

function drawTile() {
    var count = 0;
    for (i = 0; i < gameMatrix.length; i++) {
        for (j = 0; j < gameMatrix[i].length; j++) {
            squares[count].style.background = 'rgba(238, 228, 218, 0.35)';
            tiles[count].style.color = 'black';
            tiles[count].style['font-size'] = '55px';
            if (gameMatrix[i][j]) {
                tiles[count].innerHTML = gameMatrix[i][j];
                switch (gameMatrix[i][j]) {
                    case 2:
                        squares[count].style.background = '#eee4da';
                        break;
                    case 4:
                        squares[count].style.background = '#ede0c8';
                        break;
                    case 8:
                        squares[count].style.background = '#f2b179';
                        tiles[count].style.color = 'white';
                        break;
                    case 16:
                        squares[count].style.background = '#f59563';
                        tiles[count].style.color = 'white';
                        break;
                    case 32:
                        squares[count].style.background = '#f67c5f';
                        tiles[count].style.color = 'white';
                        break;
                    case 64:
                        squares[count].style.background = '#f65e3b';
                        tiles[count].style.color = 'white';
                        break;
                    case 128:
                        squares[count].style.background = '#edcf72';
                        tiles[count].style.color = 'white';
                        tiles[count].style['font-size'] = '50px';
                        break;
                    case 256:
                        squares[count].style.background = '#edcc61';
                        tiles[count].style.color = 'white';
                        tiles[count].style['font-size'] = '50px';
                        break;
                    case 512:
                        squares[count].style.background = '#edc850';
                        tiles[count].style.color = 'white';
                        tiles[count].style['font-size'] = '50px';
                        break;
                    case 1024:
                        squares[count].style.background = '#edc53f';
                        tiles[count].style.color = 'white';
                        tiles[count].style['font-size'] = '40px';
                        break;
                    default:
                        break;
                }
            }
            else if (gameMatrix[i][j] === 0)
                tiles[count].innerHTML = '';
            count++;
        }
    }
}

function sorting1(a) {
    var res = [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];
    for (i = 0; i < 4; i++) {
        var count = 3;
        for (j = a[i].length - 1; j >= 0; j--) {
            if (a[i][j] !== 0) {
                res[i][count] = a[i][j];
                count--;
            }
        }
    }
    return res;
}//for right key

function sorting2(a) {
    var res = [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];
    for (i = 0; i < 4; i++) {
        var count = 0;
        for (j = 0; j < a[i].length; j++) {
            if (a[i][j] !== 0) {
                res[i][count] = a[i][j];
                count++;
            }
        }
    }
    return res;
}//for left key

function sorting3(a) {
    var res = [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];
    for (i = 0; i < a.length; i++) {
        var count = 0;
        for (j = 0; j < a[i].length; j++) {
            if (a[i][j] !== 0) {
                res[count][i] = a[i][j];
                count++;
            }
        }
    }
    return res;
}//for up key

function sorting4(a) {
    var res = [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];
    for (i = 0; i < a.length; i++) {
        var count = 3;
        for (j = a[i].length - 1; j >= 0; j--) {
            if (a[i][j] !== 0) {
                res[count][i] = a[i][j];
                count--;
            }
        }
    }
    return res;
}//for down key

function moveRight() {
    var validMove = false;
    var res = [[], [], [], []];
    //remove zero
    for (i = 0; i < gameMatrix.length; i++) {
        for (j = 0; j < gameMatrix.length; j++) {
            if (gameMatrix[i][j] !== 0)
                res[i].push(gameMatrix[i][j]);
        }
    }
    //count
    for (i = 0; i < res.length; i++) {
        for (j = res[i].length - 1; j >= 0; j--) {
            if (res[i][j] === res[i][j - 1]) {
                res[i][j] *= 2;
                res[i][j - 1] = 0;
            }
        }
    }
    //return to matrix form
    var temp = sorting1(res);
    //check move validity
    for (i = 0; i < temp.length; i++) {
        for (j = 0; j < temp[i].length; j++) {
            if (temp[i][j] !== gameMatrix[i][j])
                validMove = true;
        }
    }
    if (validMove)
        gameMatrix = temp.slice();
    return validMove;
}

function moveLeft() {
    var validMove = false;
    var res = [[], [], [], []];
    //remove zero
    for (i = 0; i < gameMatrix.length; i++) {
        for (j = 0; j < gameMatrix.length; j++) {
            if (gameMatrix[i][j] !== 0)
                res[i].push(gameMatrix[i][j]);
        }
    }
    //count
    for (i = 0; i < res.length; i++) {
        for (j = 0; j < res[i].length; j++) {
            if (res[i][j] === res[i][j + 1]) {
                res[i][j] *= 2;
                res[i][j + 1] = 0;
            }
        }
    }
    //return to matrix form
    var temp = sorting2(res);
    //check move validity
    for (i = 0; i < temp.length; i++) {
        for (j = 0; j < temp[i].length; j++) {
            if (temp[i][j] !== gameMatrix[i][j])
                validMove = true;
        }
    }
    if (validMove)
        gameMatrix = temp.slice();
    return validMove;
}

function moveUp() {
    var validMove = false;
    var res = [[], [], [], []];
    //remove zero
    for (i = 0; i < gameMatrix.length; i++) {
        for (j = 0; j < gameMatrix.length; j++) {
            if (gameMatrix[j][i] !== 0)
                res[i].push(gameMatrix[j][i]);
        }
    }
    //count
    for (i = 0; i < res.length; i++) {
        for (j = 0; j < res[i].length; j++) {
            if (res[i][j] === res[i][j + 1]) {
                res[i][j] *= 2;
                res[i][j + 1] = 0;
            }
        }
    }
    //return to matrix form
    var temp = sorting3(res);
    //check move validity
    for (i = 0; i < temp.length; i++) {
        for (j = 0; j < temp[i].length; j++) {
            if (temp[i][j] !== gameMatrix[i][j])
                validMove = true;
        }
    }
    if (validMove)
        gameMatrix = temp.slice();
    return validMove;
}

function moveDown() {
    var validMove = false;
    var res = [[], [], [], []];
    //remove zero
    for (i = 0; i < gameMatrix.length; i++) {
        for (j = 0; j < gameMatrix.length; j++) {
            if (gameMatrix[j][i] !== 0)
                res[i].push(gameMatrix[j][i]);
        }
    }
    //count
    for (i = 0; i < res.length; i++) {
        for (j = res[i].length - 1; j >= 0; j--) {
            if (res[i][j] === res[i][j - 1]) {
                res[i][j] *= 2;
                res[i][j - 1] = 0;
            }
        }
    }
    //return to matrix form
    var temp = sorting4(res);
    //check move validity
    for (i = 0; i < temp.length; i++) {
        for (j = 0; j < temp[i].length; j++) {
            if (temp[i][j] !== gameMatrix[i][j])
                validMove = true;
        }
    }
    if (validMove)
        gameMatrix = temp.slice();
    return validMove;
}

function update(button) {
    var isValid = false;
    switch (button.code) {
        case 'ArrowRight':
            isValid = moveRight();
            break;
        case 'ArrowLeft':
            isValid = moveLeft();
            break;
        case 'ArrowUp':
            isValid = moveUp();
            break;
        case 'ArrowDown':
            isValid = moveDown();
            break;
        default:
            break;
    };
    if (isValid) {
        drawTile();
        randomize();
    }
    if (checkWinCondition() && !isWin) {
        alert('YOU WIN!');
        isWin = true;
    }
}

function newGame() {
    for(i=0; i<gameMatrix.length; i++){
        for(j=0; j<gameMatrix[i].length; j++)
            gameMatrix[i][j] = 0;
    }
    isWin = false;
    drawTile();
    randomize();
    randomize();
}

document.addEventListener('keydown', update);
newGame();