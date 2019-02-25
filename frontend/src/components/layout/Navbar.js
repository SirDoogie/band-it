import React, { Component } from 'react'

import NavbarUser from './NavbarUser';
import NavbarLanding from './NavbarLanding';

class Navbar extends Component {
  render(){
    const loggedIn = this.props.loggedIn;

    return(
        <div>
          { loggedIn ? (<NavbarUser/>) : (<NavbarLanding/>) }
        </div>
    )
  }
}

export default Navbar;