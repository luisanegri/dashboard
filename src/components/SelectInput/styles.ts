import styled from 'styled-components';

export const Container = styled.div`
  > select {
    padding: 7px 10px;
    border-radius: 2px;
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};
    margin-left: 7px;
  }
`;
