import React, { Component } from 'react'

import NavbarUser from './NavbarUser';
import NavbarLanding from './NavbarLanding';

class Navbar extends Component {
  render(){
    const loggedIn = this.props.loggedIn;

    return(
        <header>
          { loggedIn ? (<NavbarUser/>) : (<NavbarLanding/>) }
        </header>
    )
  }
}

export default Navbar;