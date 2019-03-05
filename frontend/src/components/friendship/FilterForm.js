import React, { Component } from 'react';
import { Card, Form, FormGroup, Input, Row, Col } from 'reactstrap';

const labelStyle = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
  fontSize: '12px',
  color: '#000000'
};

const selectItemStyle = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: 'normal',

  color: 'rgba(0, 0, 0, 0.5)'
};

const lineStyle = {
  background: 'rgba(0, 0, 0, 0.1)'
};

const selectStyle = {
  border: '1px solid rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
  borderRadius: '2px'
};

class FilterForm extends Component {
  render() {
    return (
      <div>
        <Card body className={'filter-form-info'}>
          <Form>
            <FormGroup>
              <label style={labelStyle}>Sorting:</label>
              <select
                class='form-control'
                id='sorting-select'
                style={selectStyle}
              >
                <option style={selectItemStyle}>by popularity</option>
                <option style={selectItemStyle}>by status</option>
                <option style={selectItemStyle}>by time</option>
                <option style={selectItemStyle}>by blabla</option>
              </select>
            </FormGroup>
            <hr style={lineStyle} />
            <FormGroup>
              <label style={labelStyle}>Name:</label>
              <Input
                type='name'
                name='name'
                id='user_name'
                style={selectStyle}
              />
            </FormGroup>
            <FormGroup>
              <label style={labelStyle}>Band name:</label>
              <Input
                type='band_name'
                name='band_name'
                id='user_band_name'
                style={selectStyle}
              />
            </FormGroup>
            <FormGroup>
              <label style={labelStyle}>Status:</label>
              <select
                class='form-control'
                id='status-select'
                style={selectStyle}
              >
                <option style={selectItemStyle}>in a band</option>
                <option style={selectItemStyle}>not in a band</option>
                <option style={selectItemStyle}>looking for band</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label style={labelStyle}>City:</label>
              <select class='form-control' id='city-select' style={selectStyle}>
                <option style={selectItemStyle}>New York</option>
                <option style={selectItemStyle}>Los Angeles</option>
                <option style={selectItemStyle}>Chicago</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label style={labelStyle}>Distance:</label>
              <select
                class='form-control'
                id='distance-select'
                style={selectStyle}
              >
                <option style={selectItemStyle}>1 mile</option>
                <option style={selectItemStyle}>5 miles</option>
                <option style={selectItemStyle}> >10 miles</option>
              </select>
            </FormGroup>
            <Row>
              <Col xs='12'>
                <label style={labelStyle}>Age:</label>
              </Col>
            </Row>
            <Row
              noGutters={true}
              className='justify-content-between align-items-baseline'
            >
              <Col xs='5'>
                <FormGroup>
                  <select
                    class='form-control'
                    id='age-select'
                    style={selectStyle}
                  >
                    <option style={selectItemStyle} selected disabled>
                      from:
                    </option>
                    <option style={selectItemStyle}>14</option>
                    <option style={selectItemStyle}>15</option>
                    <option style={selectItemStyle}>16</option>
                  </select>
                </FormGroup>
              </Col>
              <span className='text-dark divider col-1 text-center'>-</span>
              <Col xs='5'>
                <FormGroup>
                  <select
                    class='form-control'
                    id='age-select'
                    style={selectStyle}
                  >
                    <option style={selectItemStyle} selected disabled>
                      to:
                    </option>
                    <option style={selectItemStyle}>100</option>
                    <option style={selectItemStyle}>101</option>
                    <option style={selectItemStyle}>102</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <label style={labelStyle}>Gender:</label>
              <select
                class='form-control'
                id='gender-select'
                style={selectStyle}
              >
                <option style={selectItemStyle}>male</option>
                <option style={selectItemStyle}>female</option>
              </select>
            </FormGroup>
          </Form>
        </Card>
        <Card body className={'filter-form-experince'}>
          <Form>
            <FormGroup>
              <label style={labelStyle}>Instrument played:</label>
              <select
                class='form-control'
                id='instrument-select'
                style={selectStyle}
              >
                <option style={selectItemStyle}>Guitar</option>
                <option style={selectItemStyle}>Another one</option>
                <option style={selectItemStyle}>Another one</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label style={labelStyle}>Genre:</label>
              <select
                class='form-control'
                id='genre-select'
                style={selectStyle}
              >
                <option style={selectItemStyle}>black methal</option>
                <option style={selectItemStyle}>rock</option>
                <option style={selectItemStyle}>pop</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label style={labelStyle}>Years of experince:</label>
              <select
                class='form-control'
                id='experince-select'
                style={selectStyle}
              >
                <option style={selectItemStyle}>1</option>
                <option style={selectItemStyle}>2</option>
                <option style={selectItemStyle}>> 2</option>
              </select>
            </FormGroup>
          </Form>
        </Card>
      </div>
    );
  }
}

export default FilterForm;
