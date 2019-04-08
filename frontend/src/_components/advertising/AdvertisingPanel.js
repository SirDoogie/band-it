import React, { Component } from 'react'
import { Col } from 'reactstrap'
import Advertisement from './Advertisement'

class AdvertisingPanel extends Component {
  render() {
    return(
      <Col id={ 'advertisement' } xs={ '2' }>
        <Advertisement />
        <Advertisement />
        <Advertisement />
      </Col>
    )
  }
}

export default AdvertisingPanel