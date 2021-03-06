import React from 'react';
import {Form, Col, Row, Button} from 'reactstrap';
import styled from 'styled-components';

import TextInput from '../../common/form/TextInput';
import SelectInput from '../../common/form/SelectInput';

const options = [
  {value: 'fullTime', label: 'Full Time'},
  {value: 'partTime', label: 'Part Time'},
  {value: 'freelance', label: 'Freelance'},
  {value: 'internship', label: 'Internship'},
  {value: 'contract', label: 'Contract'},
  {value: 'temporary', label: 'Temporary'},
];

const Styles = styled.div`
  .search-btn button {
    background-color: #fff;
    color: #555;
  }
`;
const CandidateSearchTab = () => {
  return (
    <Styles>
      <Form>
        <Row>
          <Col md="4" xs="12">
            <TextInput
              type="text"
              name="keyword"
              placeholder="eg. Adam Scott"
            />
          </Col>
          <Col md="3" xs="12" className="category">
            <SelectInput
              options={options}
              defaultValue={{value: '', label: 'Select Category'}}
            />
          </Col>
          <Col md="3" xs="12">
            <TextInput type="text" name="location" placeholder="Location" />
          </Col>
          <Col className="search-btn" md="2" xs="12">
            <Button block type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Styles>
  );
};

export default CandidateSearchTab;
