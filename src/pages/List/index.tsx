import React from 'react';

import SelectInput from '../../components/SelectInput';
import ContentHeader from '../../components/ContentHeader/index';

import { Container } from './styles';

const List: React.FC = () => {
  const options = [
    { value: 'luisa', label: 'luisa' },
    { value: 'ceren', label: 'ceren' },
  ];
  return (
    <Container>
      <ContentHeader title="Paid Out" lineColor="#EB403A">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default List;
