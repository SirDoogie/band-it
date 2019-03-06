import React, { Component } from 'react';
import { Card, Form, FormGroup, Input, Row, Col, CardBody } from 'reactstrap';

class FilterForm extends Component {
  render() {
    return (
      <div className={'filter-form-info'}>
        <Form>
          <Card>
            <CardBody>
              <FormGroup>
                <label>Sorting:</label>
                <select class='form-control' id='sorting-select'>
                  <option>by popularity</option>
                  <option>by status</option>
                  <option>by time</option>
                  <option>by blabla</option>
                </select>
              </FormGroup>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <FormGroup>
                <label>Name:</label>
                <Input
                  type='name'
                  name='name'
                  id='user_name'
                  className='selectStyle'
                />
              </FormGroup>
              <FormGroup>
                <label>Band name:</label>
                <Input type='band_name' name='band_name' id='user_band_name' />
              </FormGroup>
              <FormGroup>
                <label>Status:</label>
                <select class='form-control' id='status-select'>
                  <option>in a band</option>
                  <option>not in a band</option>
                  <option>looking for band</option>
                </select>
              </FormGroup>
              <FormGroup>
                <label>City:</label>
                <select class='form-control' id='city-select'>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                </select>
              </FormGroup>
              <FormGroup>
                <label>Distance:</label>
                <select class='form-control' id='distance-select'>
                  <option>1 mile</option>
                  <option>5 miles</option>
                  <option> >10 miles</option>
                </select>
              </FormGroup>
              <Row>
                <Col xs='12'>
                  <label>Age:</label>
                </Col>
              </Row>
              <Row
                noGutters={true}
                className='justify-content-between align-items-baseline'
              >
                <Col xs='5'>
                  <FormGroup>
                    <select class='form-control' id='age-select'>
                      <option selected disabled>
                        from:
                      </option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                    </select>
                  </FormGroup>
                </Col>
                <span className='text-dark divider col-1 text-center'>-</span>
                <Col xs='5'>
                  <FormGroup>
                    <select class='form-control' id='age-select'>
                      <option selected disabled>
                        to:
                      </option>
                      <option>100</option>
                      <option>101</option>
                      <option>102</option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <label>Gender:</label>
                <select class='form-control' id='gender-select'>
                  <option>male</option>
                  <option>female</option>
                </select>
              </FormGroup>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <FormGroup>
                <label>Instrument played:</label>
                <select class='form-control' id='instrument-select'>
                  <option>Guitar</option>
                  <option>Another one</option>
                  <option>Another one</option>
                </select>
              </FormGroup>
              <FormGroup>
                <label>Genre:</label>
                <select class='form-control' id='genre-select'>
                  <option>black methal</option>
                  <option>rock</option>
                  <option>pop</option>
                </select>
              </FormGroup>
              <FormGroup>
                <label>Years of experince:</label>
                <select class='form-control' id='experince-select'>
                  <option>1</option>
                  <option>2</option>
                  <option>> 2</option>
                </select>
              </FormGroup>
            </CardBody>
          </Card>
        </Form>
      </div>
    );
  }
}

export default FilterForm;
