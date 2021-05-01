import { Component } from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import './App.scss'

import SEO from './components/SEO'
import Header from './components/Header'
import Body from './components/Body'

import $ from 'jquery'
import 'what-input'
import 'foundation-sites'

class App extends Component {
  componentDidMount() {
    $(document).foundation()
  }

  render() {
    return (
      <Router>
        <SEO />
        <Header />
        <Body />
      </Router>
    )
  }
}

export default App
