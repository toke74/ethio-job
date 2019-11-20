import React from 'react';
import {Form} from 'reactstrap';

import TextInput from '../../../common/form/TextInput';

const KeywordSearch = () => {
  return (
    <div className="job-search-item p-4 mb-4">
      <p className="title">Job Search</p>
      <Form>
        <TextInput type="text" name="keyword" placeholder="keyword" />
      </Form>
    </div>
  );
};

export default KeywordSearch;
