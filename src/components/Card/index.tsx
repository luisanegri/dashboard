import React from 'react';
import { Container, Tag } from './styles';

interface ICard {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const Card: React.FC<ICard> = ({ tagColor, title, subtitle, amount }) => {
  return (
    <Container>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h4>{amount}</h4>
    </Container>
  );
};

export default Card;
