import styled from 'styled-components';

export const AsideContainer = styled.div`
  grid-area: aside;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 0 20px;
`;

export const AsideHeader = styled.header`
  display: flex;
  height: 55px;
  align-items: center;
`;

export const UserInfo = styled.div`
  margin: 30px 0;
`;

export const Username = styled.p`
  text-align: center;
`;

export const ContainerMenu = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const LogoInfo = styled.div``;

export const Logo = styled.h3`
  margin: 0 auto;
  font-size: 18px;

  > svg {
    font-size: 9px;
    margin-left: 4px;
    color: ${(props) => props.theme.colors.warning};
  }
`;

export const MenuLink = styled.a`
  color: ${(props) => props.theme.colors.info};
  text-decoration: none;
  margin: 7px 0;
  display: flex;
  align-items: center;

  transition: opacity 0.3;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    margin-right: 12px;
  }
`;
