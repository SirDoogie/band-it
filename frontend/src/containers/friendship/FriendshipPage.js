import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Filter from '../../components/friendship/FilterForm';

class FriendshipPage extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: '5%', marginLeft: '5%' }}>
          {/* delete style */}
          <Row>
            <Col xs={3}>
              <Filter />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FriendshipPage;
