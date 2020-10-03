import React from 'react';

import SelectInput from '../../components/SelectInput';
import Card from '../../components/Card';
import ContentHeader from '../../components/ContentHeader/index';

import { Container, Content } from './styles';

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
      <Content>
        <Card
          tagColor="#EB403A"
          title="Electricity bill"
          subtitle="01/11/2020"
          amount="€150"
        />
      </Content>
    </Container>
  );
};

export default List;
