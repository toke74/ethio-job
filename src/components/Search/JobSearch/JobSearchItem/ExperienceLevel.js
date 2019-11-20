import React, {Component} from 'react';
import {Form, Label, FormGroup} from 'reactstrap';

import RadioInput from '../../../common/form/RadioInput';

class ExperienceLevel extends Component {
  render () {
    return (
      <div className="job-experience-item p-4 mb-4">
        {/* <p className="title">Job Search</p> */}
        <Form>
          <FormGroup tag="fieldset">
            <legend className="title">Job Search</legend>
            <FormGroup check>
              <Label check>
                <RadioInput type="radio" name="experienceLevel" />
                Entry Level
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <RadioInput type="radio" name="experienceLevel" />
                Intermediate Level
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <RadioInput type="radio" name="experienceLevel" />
                Experienced Level
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default ExperienceLevel;
