import React from 'react';
import { Container, Title, Controllers } from './styles';

import SelectInput from '../SelectInput/index';
const ContentHeader: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Dashboard</h1>
      </Title>
      <Controllers>
        <SelectInput />
        <SelectInput />
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
