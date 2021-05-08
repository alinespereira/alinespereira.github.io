import { Component } from 'react'
import { Link } from 'react-router-dom'
import * as Foundation from 'react-foundation'

class Destaques extends Component {
  render() {
    return (
      <Foundation.Grid>
        <Foundation.Grid vertical>
          <h1>Destaques</h1>
          <Link to="/post/jogo-da-vida">Jogo da vida</Link>
          <Link to="/post/hello-world">Hello, World!</Link>
        </Foundation.Grid>
      </Foundation.Grid>

    )
  }
}

export default Destaques
