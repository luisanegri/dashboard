import React from 'react';

import { Container } from './styles';

const SelectInput: React.FC = () => {
  return (
    <Container>
      <select>
        <option value="a">March</option>
        <option value="b">April</option>
        <option value="c">May</option>
      </select>
    </Container>
  );
};

export default SelectInput;
