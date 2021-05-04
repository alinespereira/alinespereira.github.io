import { Component } from 'react'

export interface GameOfLifeProps {
  gridMin?: number,
  gridMax?: number
}

export enum CellStatus {
  Alive = 1,
  Dead = 0
}

export interface GameOfLifeState {
  id?: string,
  gridX: number,
  gridY: number,
  cells?: Array<Array<CellStatus>>
}

export class GameOfLifeGrid extends Component<GameOfLifeState> {
  render() {
    return (
      <table>
        {this.props.cells?.map(row =>
          <tr>
            {row.map(cell => <td>{cell}</td>)}
          </tr>
        )}
      </table>
    )
  }
}
