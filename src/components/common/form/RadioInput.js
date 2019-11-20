import React from 'react';
import {Input} from 'reactstrap';

const RadioInput = ({type, name, value, onChange}) => {
  return <Input type={type} name={name} value={value} onChange={onChange} />;
};

export default RadioInput;
