import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  padding: 0 10px;
`;
