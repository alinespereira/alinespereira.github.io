import { ChangeEvent, Component } from 'react'

import * as Foundation from 'react-foundation'

interface GameOfLifeProps {
  gridMin?: number,
  gridMax?: number
}

enum CellStatus {
  Alive = 1,
  Dead = 0
}

interface GameOfLifeState {
  gridX: number,
  gridY: number,
  cells?: [[CellStatus]]
}

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
    cells: undefined
  }

  componentDidMount() {
    console.log("mount")
  }

  updateGrid() {
    this.setState({ cells: undefined })

    console.log(this.state.gridX)
    console.log(this.state.gridY)
    
    // const cells: [[CellStatus]] = Array(this.state.gridX).fill(Array(this.state.gridY).fill(CellStatus.Dead))
    // const cells = [...Array(this.state.gridX)].map(_ => [Array(this.state.gridY).fill(CellStatus)])
    // for (let i in cells) {
    //   for (let j in cells[i]) {
    //     cells[i][j] = CellStatus.Dead
    //   }
    // }
    // this.setState({ cells })
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
              data-start={gridMin} data-end={gridMax}
              onInput={this.updateGridXSize}
            />
          </Foundation.Cell>
          <Foundation.Cell small={6} medium={4} large={2}>
            <input type="number" id="vertical-grid-size"
              data-start={gridMin} data-end={gridMax}
              onInput={this.updateGridYSize}
            />
          </Foundation.Cell>
        </Foundation.Grid>


        <Foundation.Grid>
          <Foundation.Cell medium={1} showFor="medium">
          </Foundation.Cell>
          <Foundation.Cell small={12} medium={11}>
              <div className="slider" data-slider
                  data-start={gridMin} data-end={gridMax} data-initial-start={gridX}>
                <span className="slider-handle"
                  role="slider"
                  aria-valuenow={gridX}
                  data-slider-handle
                  tabIndex={1}
                  aria-controls="horizontal-grid-size"></span>
                <span className="slider-fill" data-slider-fill></span>
              </div>
          </Foundation.Cell>
        </Foundation.Grid>

        <Foundation.Grid>
          <Foundation.Cell medium={1} showFor="medium">
            <div className="slider vertical" data-slider
                data-start={gridMin} data-end={gridMax} data-initial-start={gridY} data-vertical="true">
              <span className="slider-handle"
                role="slider"
                aria-valuenow={gridY}
                data-slider-handle
                tabIndex={2}
                aria-controls="vertical-grid-size"></span>
              <span className="slider-fill" data-slider-fill></span>
            </div>
          </Foundation.Cell>
          <Foundation.Cell small={12} medium={11}>
            <div id="game-board" />
          </Foundation.Cell>
        </Foundation.Grid>
      </Foundation.Grid>
    )
  }
}

export default GameOfLife
