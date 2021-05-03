import { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import *  as Foundation from 'react-foundation'

import './Header.scss'

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Foundation.TitleBar data-responsive-toggle="responsive-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="responsive-menu"></button>
          <Foundation.TitleBarTitle>Menu</Foundation.TitleBarTitle>
        </Foundation.TitleBar>

        <Foundation.TopBar id="responsive-menu">
          <Link className="show-for-medium" to="/">
            <Foundation.Icon name="logo"></Foundation.Icon>
          </Link>
          <Foundation.TopBarLeft>
            <Foundation.Menu isVertical horizontalOnMedium data-responsive-menu="accordion medium-dropdown">
              <Foundation.MenuItem><Link to="/">This is: Aline</Link></Foundation.MenuItem>
              <Foundation.MenuItem is="vertical">
                <Link to="/destaques">Destaques</Link>
                <Foundation.Menu isVertical isNested>
                  <Foundation.MenuItem>
                    <Link to="/post/jogo-da-vida">Jogo da vida</Link>
                    <Link to="/post/hello-world">Hello, World!</Link>
                  </Foundation.MenuItem>
                </Foundation.Menu>
              </Foundation.MenuItem>
            </Foundation.Menu>
          </Foundation.TopBarLeft>
        </Foundation.TopBar>
      </Fragment>
    )
  }
}

export default Header
