import styled from 'styled-components';

interface ITitleProps {
  lineColor: string;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Controllers = styled.div`
  display: flex;
`;

export const Title = styled.div<ITitleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  > h1 {
    font-weight: bold;

    &::after {
      content: '';
      display: block;
      width: 30px;
      border-bottom: 2px solid ${(props) => props.lineColor};
    }
  }
`;
