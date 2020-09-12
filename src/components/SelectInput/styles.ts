import styled from 'styled-components';

export const Container = styled.div`
  > select {
    padding: 7px 10px;
    border-radius: 2px;
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.tertiary};
    margin-left: 7px;
  }
`;
