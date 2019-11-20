import React, {Component} from 'react';

import SelectInput from '../../../common/form/SelectInput';

const options = [
  {value: 'all', label: 'All'},
  {value: 'fullTime', label: 'Full Time'},
  {value: 'partTime', label: 'Part Time'},
  {value: 'freelance', label: 'Freelance'},
  {value: 'internship', label: 'Internship'},
  {value: 'contract', label: 'Contract'},
  {value: 'temporary', label: 'Temporary'},
];
class JobType extends Component {
  render () {
    return (
      <div className="job-category-item p-4 mb-4">
        <p className="title">Job Type</p>
        <SelectInput
          options={options}
          defaultValue={{value: 'all', label: 'All'}}
        />
      </div>
    );
  }
}

export default JobType;
