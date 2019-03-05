import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Filter from '../../components/friendship/FilterForm';

class FriendshipPage extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: '10%' }}>
          <Row className={'justify-content-left'}>
            <Col xs={4}>
              <Filter />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FriendshipPage;
