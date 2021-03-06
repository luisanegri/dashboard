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

  const months = useMemo(() => {
    let uniqueMonths: number[] = []

    listData.forEach((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1
     // const month = date.toLocaleString('default', { month: 'long' });
      if(!uniqueMonths.includes(month)) {
        uniqueMonths.push(month)
      }
    })

    return uniqueMonths.map((month, index) => {
      return {key: index, value: month, label: month}
    })


  }, [listData])

  const years = useMemo(() => {
    let uniqueYears: number[] = []

    listData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if(!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map((year, index) => {
      return {key: index, value: year, label: year}
    })

  }, [listData])

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
  }, [listData, monthSelected, yearSelected]);

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
