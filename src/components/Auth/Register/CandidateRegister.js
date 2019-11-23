import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';

import TextInput from '../../common/form/TextInput';

function CandidateRegister(props) {
  const style = {
    textAlign: 'center',
    marginTop: '10px',
    fontWeight: 'bold',
  };
  return (
    <div>
      <h3 className="register-login-title">Candidate SignUp </h3>
      <hr />
      <Container className="register-form ">
        <div className="social-register">
          <Row>
            <Col className="col-facebook" md="5">
              <Button block className=" facebook-btn social-btn">
                <span>
                  <i className="mr-3 fab fa-facebook-square" />
                  Sign Up with Facebook
                </span>
              </Button>
            </Col>

            <Col className="col-google" md="5">
              <Button block className=" google-btn social-btn">
                <span>
                  <i className="mr-2 fab fa-google-plus-g" /> Sign Up with
                  Google+
                </span>
              </Button>
            </Col>
          </Row>
        </div>
        <p style={style}>OR</p>
        <h3 className="form-register-title">Register with Email</h3>
        <Form className=" form mt-3">
          <Col md="10">
            <FormGroup>
              <Label>Full Name</Label>
              <TextInput
                type="text"
                name="email"
                id="user-name"
                placeholder="Full Name"
              />
            </FormGroup>
          </Col>
          <Col md="10">
            <FormGroup>
              <Label>Email</Label>
              <TextInput
                type="email"
                name="email"
                id="user-email"
                placeholder="Email Address"
              />
            </FormGroup>
          </Col>
          <Col md="10">
            <FormGroup>
              <Label for="user-password">Password</Label>
              <TextInput
                type="password"
                name="password"
                id="user-password"
                placeholder="Password"
              />
            </FormGroup>
          </Col>
          <Col md="10">
            <FormGroup>
              <Label for="repeat-password">Repeat Password</Label>
              <TextInput
                type="password"
                name="repeat-password"
                id="repeat-password"
                placeholder="Repeat Password"
              />
            </FormGroup>
          </Col>
          <Col className="my-4" md="10">
            <Button block color="primary">
              <i className="fas fa-user-plus mr-1" />
              Register
            </Button>
          </Col>
        </Form>
      </Container>
    </div>
  );
}

export default CandidateRegister;
