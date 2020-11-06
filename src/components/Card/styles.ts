import styled from 'styled-components';

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};
  list-style: none;
  border-radius: 5px;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  width: 50%;
  margin: 10px auto;

  &:hover {
    opacity: 0.7s;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }

  > div span {
    font-weight: 600;
    margin-top: 5px;
  }
`;

export const Tag = styled.div<ITagProps>`
  position: absolute;
  left: 0;
  width: 5px;
  height: 60%;
  background: ${(props) => props.color};
`;
