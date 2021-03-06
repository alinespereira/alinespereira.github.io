import { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import *  as Foundation from 'react-foundation'

import Home from '../pages/Home'
import Destaques from '../pages/Destaques'
import HelloWorld from '../pages/post/HelloWorld'
import GameOfLife from '../pages/post/GameOfLife'

class Body extends Component {
  render() {
    return (
      <Foundation.GridContainer>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/hello-world">
            <HelloWorld />
          </Route>
          <Route path="/post/jogo-da-vida">
            <GameOfLife />
          </Route>
          <Route path="/destaques">
            <Destaques />
          </Route>
        </Switch>
      </Foundation.GridContainer>
    )
  }
}

export default Body
