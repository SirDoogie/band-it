import React, { Component } from 'react'

import Intro from '../../components/landing/Intro'
import JoinUs from '../../components/landing/JoinUs'
import Subscribe from '../../components/landing/Subscribe'
import Footer from '../../components/layout/Footer'

class Landing extends Component {
  render() {
    return (
      <div>
        <Intro/>
        <JoinUs/>
        <Subscribe/>
        <Footer/>
      </div>
    )
  }
}

export default Landing