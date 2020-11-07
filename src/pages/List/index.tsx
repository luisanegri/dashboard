import React, { useMemo, useState, useEffect } from 'react';

import SelectInput from '../../components/SelectInput';
import Card from '../../components/Card';
import ContentHeader from '../../components/ContentHeader/index';

import { Container, Content, Filter } from './styles';

import gains from '../../data/gains';
import expenses from '../../data/expenses';
import currencyFormatter from '../../utils/currencyFormatter'
import dateFormatter from '../../utils/dateFormatter'

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  id: number;
  description: string;
  amount: string;
  frequency: string;
  date: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1))
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))

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
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  const years = [
    { value: 2018, label: 2018 },
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
  ];

  useEffect(() => {

    const filtered = listData.filter((i) => {
      const date = new Date(i.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return month === monthSelected && year === yearSelected 

    })

    const dataList = filtered.map((item, index) => {
      return {
        id: Number(index),
        description: item.description,
        amount: currencyFormatter(Number(item.amount)),
        frequency: item.frequency,
        date: dateFormatter(item.date),
        tagColor: item.frequency === 'regular' ? ' #EB403A' : '#00D5AD',
      };
    })

    
    setData(dataList)
  }, [data.length, listData, monthSelected, yearSelected]);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
        <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
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
