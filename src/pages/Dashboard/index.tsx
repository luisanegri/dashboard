import React from 'react';

import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader/index';
import SelectInput from '../../components/SelectInput/index';

const Dashboard: React.FC = () => {
  const options = [
    { value: 'luisa', label: 'luisa' },
    { value: 'ceren', label: 'ceren' },
  ];
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#00D5AD">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
