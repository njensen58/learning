var ask = require('readline-sync')

var hits = 0

function Location(){
    this.isShip = Math.floor(Math.random() * 5) === 3
    this.display = this.hit && this.isShip ? "X" : "~"
    this.hit = false
}


function generateGrid(){
    const grid = []
    for(let i = 0; i < 10; i++){
        grid[i] = []
        for(let j = 0; j < 10; j++){
            const location = new Location()
            grid[i].push(location)
        }
    }
    return grid
}

function currentGrid(grid){
    let currentGrid = []
    for(let i = 0; i < 10; i++){
        currentGrid[i] = []
        for(let j = 0; j < 10; j++){
            currentGrid[i].push(grid[i][j].display)
        }
        currentGrid[i].join()
    }
    return currentGrid
}

var grid = generateGrid()

while(hits < 3){
   
    var x = ask.question("What is your first coordinate?: ")
    var y = ask.question("What is your second coordinate?: ")
    if(x > -1 && x < 10 && y > -1 && y < 10){
        if(grid[x][y].isShip && !grid[x][y].hit){
            grid[x][y].hit = true
            grid[x][y].display = "X"
            hits++
            console.log("Diiiirect hit!")
        } else if(!grid[x][y].isShip && !grid[x][y].hit) {

            grid[x][y].hit = true
            grid[x][y].display = "M"
        } else {
            console.log("enter 2 numbers between 0 - 99 as coordinates")
        }
    }
}

console.log("You sunk 3 ships and won!")

