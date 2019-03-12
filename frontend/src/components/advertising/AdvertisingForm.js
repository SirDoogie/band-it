import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardText } from 'reactstrap'
import AdvImg from '../../images/advertising.png'

class AdvertisingForm extends Component {
  render() {
    return (
      <div>
        <Card className='advertising-card'>
          <CardImg src={AdvImg} />
          <CardTitle>Lorem ipsum</CardTitle>
          <CardText>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </CardText>
        </Card>
      </div>
    )
  }
}

export default AdvertisingForm
