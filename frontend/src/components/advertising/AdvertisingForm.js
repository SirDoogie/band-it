import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import AdvImg from '../../images/advertising.png';

class AdvertisingForm extends Component {
  render() {
    return (
      <div>
        <Card className='advertising-card'>
          <CardImg src={AdvImg} alt='Card image cap' />
          <CardBody>
            <CardTitle>Lorem ipsum</CardTitle>
            <CardText className='advertising-card-text'>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AdvertisingForm;
