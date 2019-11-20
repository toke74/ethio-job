import React from 'react';
import Select from 'react-select';

const SelectIput = ({options, defaultValue, value, onChange}) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      defaultValue={defaultValue}
    />
  );
};

export default SelectIput;
