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

function CandidateLogin(props) {
  const style = {
    textAlign: 'center',
    marginTop: '10px',
    fontWeight: 'bold',
  };
  return (
    <div>
      <h3 className="register-login-title">Candidate Sign in </h3>
      <hr />
      <Container className="login-form ">
        <div className="social-login">
          <Row>
            <Col className="col-facebook" md="5">
              <Button block className=" facebook-btn social-btn">
                <span>
                  <i className="mr-3 fab fa-facebook-square" />
                  Sign in with Facebook
                </span>
              </Button>
            </Col>

            <Col className="col-google" md="5">
              <Button block className=" google-btn social-btn">
                <span>
                  <i className="mr-2 fab fa-google-plus-g" /> Sign in with
                  Google+
                </span>
              </Button>
            </Col>
          </Row>
        </div>
        <p style={style}>OR</p>
        <h3 className="form-login-title">Sign In with Email</h3>
        <Form className=" form mt-3">
          <Col md="10">
            <FormGroup>
              <Label>Email</Label>
              <TextInput
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="email"
              />
            </FormGroup>
          </Col>
          <Col md="10">
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <TextInput
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
              />
            </FormGroup>
          </Col>
          <Col className="my-4" md="10">
            <Button block color="primary">
              Sign In
            </Button>
          </Col>
        </Form>
      </Container>
    </div>
  );
}

export default CandidateLogin;
