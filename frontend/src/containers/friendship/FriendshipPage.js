import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Filter from '../../components/friendship/FilterForm';
import Advertising from '../../components/advertising/AdvertisingForm';

class FriendshipPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className='justify-content-between'>
            <Col xs={3} style={{ marginTop: '5%' }}>
              <Filter />
            </Col>
            <Col xs={2} style={{ marginTop: '5%' }}>
              <Advertising />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FriendshipPage;
