import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'
import { AdvertisingDemo } from '_assets/images'

class Advertisement extends Component {
  render() {
    return (
      <Card className='advertising-card'>
        <CardImg src={AdvertisingDemo} />
        <CardBody>
          <CardTitle>Advertisement</CardTitle>
          <CardText>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </CardText>
        </CardBody>
      </Card>
    )
  }
}

export default Advertisement
