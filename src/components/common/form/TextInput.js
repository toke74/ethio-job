import React from 'react';
import {Input} from 'reactstrap';

const TextInput = ({type, name, placeholder, value, onChange}) => {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
