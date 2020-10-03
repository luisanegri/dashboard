import React from 'react';

import SelectInput from '../../components/SelectInput';
import Card from '../../components/Card';
import ContentHeader from '../../components/ContentHeader/index';

import { Container, Content, Filter } from './styles';

const List: React.FC = () => {
  const months = [
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
  ];

  const years = [
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ];

  return (
    <Container>
      <ContentHeader title="Paid Out" lineColor="#EB403A">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filter>
        <button type="button" className="tag-filter tag-filter-regular">
          Regular
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventual
        </button>
      </Filter>
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
