import { Component } from 'react'
import * as Foundation from 'react-foundation'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <Foundation.Grid>
        <Foundation.Grid vertical>
          <h1>Welcome Home!</h1>

          <p>É novo por aqui? Então venha conferir meu <Link to='/post/hello-world'>primeiro post!</Link></p>

          <p>Divirta-se!</p>
        </Foundation.Grid>
      </Foundation.Grid>
    )
  }
}

export default Home
