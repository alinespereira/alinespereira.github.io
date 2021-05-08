import { Component } from 'react'
import * as d3 from 'd3'

import './GameOfLifeGrid.scss'

export interface GameOfLifeProps {
  gridMin?: number,
  gridMax?: number
}

export enum CellStatus {
  Alive = 1,
  Dead = 0
}

export interface Cell {
  posX: number,
  posY: number,
  cellStatus: CellStatus
}

export interface GameOfLifeState {
  id?: string,
  gridX: number,
  gridY: number,
  cells: Array<Array<Cell>>,
  play?: boolean
}

export class GameOfLifeGrid extends Component<GameOfLifeState> {
  
  componentDidMount() {
    const width = 0.6 * Math.min(window.screen.availWidth, window.screen.availHeight)
    const rectWidth = Math.floor(width / this.props.gridX)
    const rectHeight = rectWidth
    const height = this.props.gridX * rectWidth

    const svg = d3.select('#game-board')
    svg
      .attr('width', width)
      .attr('height', height)

    svg
      .selectAll('*')
      .remove()

    const row = svg.selectAll(".row")
      .data<Array<Cell>>(this.props.cells)
      .enter().append("g")
      .attr("class", "row")

    row
      .selectAll(".square")
      .data(d => d)
      .enter().append("rect")
      .attr("class", d => `square ${d.cellStatus === CellStatus.Alive? "alive" : "dead"}`)
      .attr("x", d => d.posX * rectWidth)
      .attr("y", d => d.posY * rectHeight)
      .attr("width", rectWidth)
      .attr("height", rectHeight)
  }

  render() {
    return (
      <svg id="game-board" />
    )
  }
}
