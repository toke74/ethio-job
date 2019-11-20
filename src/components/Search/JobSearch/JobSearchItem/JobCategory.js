import React, {Component} from 'react';

import SelectInput from '../../../common/form/SelectInput';

const options = [
  {value: 'anyCategory', label: 'Any Category'},
  {value: 'agriculture', label: 'Agriculture and Natural Resources'},
  {value: 'architecture', label: 'Architecture and Construction'},

  {value: 'artsAudio', label: 'Arts, Audio/Video & Communications'},
  {value: 'business', label: 'Business Management & Administration'},
  {value: 'education', label: 'Education & Training'},

  {value: 'finance', label: 'Finance'},
  {value: 'publicAdmin', label: 'Public Administration'},
  {value: 'healthScience', label: 'Health Science'},

  {value: 'tourism', label: 'Hospitality & Tourism'},
  {value: 'humanServices', label: 'Human Services'},
  {value: 'informationTechnology', label: 'Information Technology'},

  {value: 'law', label: 'Law & Security'},
  {value: 'manufacturing', label: 'Manufacturing'},
  {value: 'Marketing', label: 'Marketing & Sales '},

  {value: 'science', label: 'Science & Technology '},
  {value: 'transportation', label: 'Transportation & Logistics'},
];

class JobCategory extends Component {
  render () {
    return (
      <div className="job-category-item p-4 mb-4">
        <p className="title">Job Category</p>
        <SelectInput
          options={options}
          defaultValue={{value: 'anyCategory', label: 'Any Category'}}
        />
      </div>
    );
  }
}

export default JobCategory;
