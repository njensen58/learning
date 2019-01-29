(function(){

    const board = document.getElementById('board');
    const gridSize = 15

    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(${gridSize}, 50px)`;
    board.style.gridTemplateRows = `repeat(${gridSize}, 50px)`;

    const gridElms = generateGridElms([], gridSize);

    const playerStart = gridElms[0][0];
    playerStart.style.backgroundColor = 'green';
   
    const player = {
        pos: playerStart,
        row: 0,
        col: 0
    }

    const wall = generateWall(gridElms, gridSize, player)

    window.addEventListener("keydown", (e) => movePlayer(e, player, gridElms, gridSize, wall));

})();




function generateGridElms(gridElms, gridSize){
    for(let i = 0; i < gridSize; i++){
        gridElms[i] = [];
        for(let j = 0; j < gridSize; j++){
            const div = document.createElement('div');
            div.style.width = '100%';
            div.style.height = '100%';
            div.style.backgroundColor = "blue";
            div.style.border = '1px solid black';
            board.appendChild(div);
            gridElms[i].push(div);
        }
    }
    return gridElms;
}


function movePlayer(e, player, gridElms, gridSize, wall){
    if(e.key === "ArrowRight"){
        const impact = checkRightCollision(player, gridElms, wall)
        if(player.col + 1 !== gridSize){
            if(!impact){
                player.pos.style.backgroundColor = 'blue';
                player.col += 1;
                player.pos = gridElms[player.row][player.col];
                player.pos.style.backgroundColor = 'green';
            }
        }
    } else if(e.key === "ArrowLeft"){
        
        if(player.col - 1 !== -1){
            player.pos.style.backgroundColor = 'blue';
            player.col -= 1;
            player.pos = gridElms[player.row][player.col];
            player.pos.style.backgroundColor = 'green';
        }
    } else if(e.key === "ArrowDown"){
        if(player.row + 1 !== gridSize){
            player.pos.style.backgroundColor = 'blue';
            player.row += 1;
            player.pos = gridElms[player.row][player.col];
            player.pos.style.backgroundColor = 'green';
        }
    } else if(e.key === "ArrowUp"){
        if(player.row - 1 !== -1){
            player.pos.style.backgroundColor = 'blue';
            player.row -= 1;
            player.pos = gridElms[player.row][player.col];
            player.pos.style.backgroundColor = 'green';
        }
    }
}

function generateWall(gridElms, gridSize, player){
    const wallStart = gridElms[0][5];
    const wall = []
    wallStart.style.backgroundColor = 'grey';
    const l = Math.floor(Math.random() * 7)
    for(let i = 0; i < l; i++){
        gridElms[i][5].style.backgroundColor = 'grey'
        wall.push({row: i, col: 5})
    }
    return wall;
}

function checkRightCollision(player, gridElms, wall){
    const wallL = Math.max(...wall.reduce((p, s) =>{ 
        p.push(Number(s.row))
        return p
    }, []))
    if(player.col + 1 !== wall[0].col){
        return false
    }
    if(player.col + 1 === wall[0].col){
        if(player.row + 1 > wallL + 1){
            return false
        }
    } else {
        return true
    }
    return true

}