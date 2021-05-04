import { ChangeEvent, Component } from 'react'
import {
  GameOfLifeProps,
  GameOfLifeState,
  CellStatus,
  GameOfLifeGrid
} from '../../components/GameOfLifeGrid'
import { v4 as uuidV4 } from 'uuid'

import * as Foundation from 'react-foundation'
import { Pause, Shuffle, Play, Trash } from '@styled-icons/foundation'

class GameOfLife extends Component<GameOfLifeProps, GameOfLifeState> {
  constructor(props: GameOfLifeProps) {
    super(props)
    this.updateGridXSize = this.updateGridXSize.bind(this)
    this.updateGridYSize = this.updateGridYSize.bind(this)
    this.updateGrid = this.updateGrid.bind(this)
    this.updateGrid()
  }
  
  static defaultProps = {
    gridMin: 10,
    gridMax: 200
  }

  state = {
    gridX: 50,
    gridY: 50,
    cells: undefined,
    id: uuidV4()
  }

  componentDidMount() {
    this.updateGrid()
  }

  updateGrid() {
    this.setState({ cells: undefined })

    console.log(this.state.gridX)
    console.log(this.state.gridY)
    
    const cells: Array<Array<CellStatus>> =
      Array(this.state.gridX)
        .fill(Array(this.state.gridY).fill(CellStatus.Dead))
    console.log(cells)
    this.setState({
      cells,
      id: uuidV4()
    })
  }

  updateGridXSize(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ gridX: parseInt(event.target.value) }, this.updateGrid)
  }

  updateGridYSize(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ gridY: parseInt(event.target.value) }, this.updateGrid)
  }
  
  render() {
    const {
      gridX,
      gridY
    } = this.state

    const {
      gridMin,
      gridMax
    } = this.props

    return (
      <Foundation.Grid vertical>
        <Foundation.Cell small={12}>
          <h1>Jogo da Vida</h1>
        </Foundation.Cell>


        <Foundation.Grid className="grid-padding-x">
          <Foundation.Cell small={6} medium={4} large={2}>
            <input type="number" id="horizontal-grid-size"
              min={gridMin} max={gridMax}
              value={gridX}
              onChange={this.updateGridXSize}
            />
          </Foundation.Cell>
          <Foundation.Cell small={6} medium={4} large={2}>
            <input type="number" id="vertical-grid-size"
              min={gridMin} max={gridMax}
              value={gridY}
              onChange={this.updateGridYSize}
            />
          </Foundation.Cell>
        </Foundation.Grid>

        <Foundation.Grid className="grid-padding-x">
          <Foundation.Cell small={12} medium={6} large={4}>
            <Foundation.Menu alignment={Foundation.Alignments.CENTER} isExpanded>
              <Foundation.MenuItem>
                <Trash size={32} />
              </Foundation.MenuItem>
              <Foundation.MenuItem>
                <Shuffle size={32} />
              </Foundation.MenuItem>
              <Foundation.MenuItem>
                <Play size={32} />
              </Foundation.MenuItem>
              <Foundation.MenuItem>
                <Pause size={32} />
              </Foundation.MenuItem>
            </Foundation.Menu>
          </Foundation.Cell>
        </Foundation.Grid>

        <Foundation.Grid>
          <Foundation.Cell small={12}>
            <div id="game-board">
              <GameOfLifeGrid
                key={this.state.id}
                gridX={this.state.gridX}
                gridY={this.state.gridY}
                cells={this.state.cells}
              />
            </div>
          </Foundation.Cell>
        </Foundation.Grid>
      </Foundation.Grid>
    )
  }
}

export default GameOfLife
