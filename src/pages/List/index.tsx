import React, { useMemo, useState, useEffect } from 'react';

import SelectInput from '../../components/SelectInput';
import Card from '../../components/Card';
import ContentHeader from '../../components/ContentHeader/index';

import { Container, Content, Filter } from './styles';

import gains from '../../data/gains';
import expenses from '../../data/expenses';

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  id: string;
  description: string;
  amount: string;
  frequency: string;
  date: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const { type } = match.params;

  const title = useMemo(() => {
    return type === 'paidIn' ? 'Paid In' : 'Paid Out';
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'paidIn' ? '#7159FF' : '#EB403A';
  }, [type]);

  const listData = useMemo(() => {
    return type === 'paidIn' ? gains : expenses;
  }, [type]);

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

  useEffect(() => {

    const history = listData.map((i) => {
      return {
        id: String(Math.random() * data.length),
        description: i.description,
        amount: i.amount,
        frequency: i.frequency,
        date: i.date,
        tagColor: i.frequency === 'regular' ? ' #EB403A' : '#00D5AD',
      };
    })
    
    setData(history)
  }, [data.length, listData]);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
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
      
        {
          data.map(i => (
            <Card
            key={i.id}
            tagColor={i.tagColor}
            title={i.description}
            subtitle={i.date}
            amount={i.amount}
          />
            ))
          
        
        }
        
      </Content>
    </Container>
  );
};

export default List;
