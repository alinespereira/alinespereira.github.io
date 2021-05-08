import { Cell, CellStatus } from '../components/GameOfLifeGrid'

const NEIGHBORS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
]

function evolve(i: number, j: number, cells: Array<Array<Cell>>, gridX: number, gridY: number) {
  const {
    posX,
    posY,
    cellStatus
  } = cells[i][j]
  
  const livingNeighbors = NEIGHBORS
    .map(([dPosX, dPosY]) =>
      cells[(gridX + posX + dPosX) % gridX][(gridY + posY + dPosY) % gridY].cellStatus
    )
    .filter(s => s === CellStatus.Alive)
    .length
  
  if ((cellStatus === CellStatus.Alive && [2, 3].includes(livingNeighbors)) ||
      (cellStatus === CellStatus.Dead && livingNeighbors === 3)) {
    return CellStatus.Alive
  } else  {
    return CellStatus.Dead
  }
}

function simulate(cells: Array<Array<Cell>>, gridX: number, gridY: number): Array<Array<Cell>> {
  const newCells: Array<Array<Cell>> = []

  for (let posX = 0; posX < cells.length; posX++) {
    newCells[posX] = []
    for ( let posY = 0; posY < cells[posX].length; posY++) {
      newCells[posX][posY] = {
        posX, posY,
        cellStatus: evolve(posX, posY, cells, gridX, gridY)
      }
    }
  }
  return newCells
}

export { simulate }
