import { ChangeEvent, Component } from 'react'
import {
  GameOfLifeProps,
  GameOfLifeState,
  Cell,
  CellStatus,
  GameOfLifeGrid
} from '../../components/GameOfLifeGrid'
import { simulate } from '../../helpers/GameOfLifeSimulator'
import { v4 as uuidV4 } from 'uuid'

import * as Foundation from 'react-foundation'
import { Pause, Shuffle, Play, Next, Trash } from '@styled-icons/foundation'

class GameOfLife extends Component<GameOfLifeProps, GameOfLifeState> {
  intervalId?: number
  
  constructor(props: GameOfLifeProps) {
    super(props)
    this.updateGridXSize = this.updateGridXSize.bind(this)
    this.updateGridYSize = this.updateGridYSize.bind(this)
    this.resetGrid = this.resetGrid.bind(this)
    this.randomizeGrid = this.randomizeGrid.bind(this)
    this.startSimulation = this.startSimulation.bind(this)
    this.stepSimulation = this.stepSimulation.bind(this)
    this.stopSimulation = this.stopSimulation.bind(this)
    this.resetGrid()
  }
  
  static defaultProps = {
    gridMin: 10,
    gridMax: 200
  }

  state = {
    gridX: 50,
    gridY: 50,
    cells: [],
    id: uuidV4(),
    play: false
  }

  componentDidMount() {
    this.resetGrid()
  }

  resetGrid() {
    const cells: Array<Array<Cell>> = []

    for (let posX = 0; posX < this.state.gridX; posX++) {
      cells[posX] = []
      for (let posY = 0; posY < this.state.gridX; posY++) {
        cells[posX][posY] = { posX, posY, cellStatus: CellStatus.Dead }
      }
    }
    this.setState({
      cells,
      id: uuidV4()
    })
  }

  randomizeGrid() {
    const aliveProbability = 0.3
    const cells: Array<Array<Cell>> = []

    for (let posX = 0; posX < this.state.gridX; posX++) {
      cells[posX] = []
      for (let posY = 0; posY < this.state.gridX; posY++) {
        cells[posX][posY] = {
          posX,
          posY,
          cellStatus: Math.random() < aliveProbability ? CellStatus.Alive : CellStatus.Dead }
      }
    }
    this.setState({
      cells,
      id: uuidV4()
    })
  }

  startSimulation() {
    if (!this.state.play && !this.intervalId)
      this.intervalId = window.setInterval(this.stepSimulation, 500)
    this.setState({
      play: true,
      id: uuidV4()
    })
  }

  stepSimulation() {
    const cells = simulate(this.state.cells, this.state.gridX, this.state.gridY)
    this.setState({
      cells,
      id: uuidV4()
    })
  }

  stopSimulation() {
    window.clearInterval(this.intervalId)
    this.intervalId = undefined
    this.setState({ play: false, id: uuidV4() })
  }

  updateGridXSize(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ gridX: parseInt(event.target.value) }, this.resetGrid)
  }

  updateGridYSize(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ gridY: parseInt(event.target.value) }, this.resetGrid)
  }
  
  render() {
    const {
      gridX,
      // gridY
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
            <input className="hide" type="number" id="vertical-grid-size"
              disabled
              min={gridMin} max={gridMax}
              //value={gridY}
              onChange={this.updateGridYSize}
            />
          </Foundation.Cell>
        </Foundation.Grid>

        <Foundation.Grid className="grid-padding-x">
          <Foundation.Cell small={12} medium={6} large={4}>
            <Foundation.Menu alignment={Foundation.Alignments.CENTER} isExpanded>
              <Foundation.MenuItem>
                <Trash size={32}
                  onClick={this.resetGrid}
                />
              </Foundation.MenuItem>
              <Foundation.MenuItem>
                <Shuffle size={32}
                  onClick={this.randomizeGrid}
                />
              </Foundation.MenuItem>
              <Foundation.MenuItem>
                <Play size={32} 
                  onClick={this.startSimulation}
                />
              </Foundation.MenuItem>
              <Foundation.MenuItem>
                <Next size={32}
                  onClick={this.stepSimulation}
                />
              </Foundation.MenuItem>
              <Foundation.MenuItem>
                <Pause size={32} 
                  onClick={this.stopSimulation}
                />
              </Foundation.MenuItem>
            </Foundation.Menu>
          </Foundation.Cell>
        </Foundation.Grid>

        <Foundation.Grid>
          <Foundation.Cell small={12} className="grid-padding-y">
            <div className="text-center" id="game">
              <GameOfLifeGrid
                key={this.state.id}
                gridX={this.state.gridX}
                gridY={this.state.gridY}
                cells={this.state.cells}
                play={this.state.play}
              />
            </div>
          </Foundation.Cell>
        </Foundation.Grid>
      </Foundation.Grid>
    )
  }
}

export default GameOfLife
