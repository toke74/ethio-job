import React from 'react';
import {Form} from 'reactstrap';

import TextInput from '../../../common/form/TextInput';

const JobLocation = () => {
  return (
    <div className="job-location-item p-4 mb-4">
      <p className="title">Location</p>
      <Form>
        <TextInput type="text" name="keyword" placeholder="eg. Addis Ababa" />
      </Form>
    </div>
  );
};
export default JobLocation;
