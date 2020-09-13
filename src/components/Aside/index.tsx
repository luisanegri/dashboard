import React from 'react';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';

import { GrGoogleWallet } from 'react-icons/gr';

import {
  AsideContainer,
  AsideHeader,
  LogoInfo,
  Logo,
  UserInfo,
  Username,
  ContainerMenu,
  MenuLink,
} from './styles';

const Aside: React.FC = () => {
  return (
    <AsideContainer>
      <AsideHeader>
        <Logo>
          Wallet
          <GrGoogleWallet />
        </Logo>
      </AsideHeader>
      <UserInfo>
        <img
          src="https://api.adorable.io/avatars/50/abott@adorable.png"
          alt="User"
        />
        <Username>Luisa Negri</Username>
      </UserInfo>
      <ContainerMenu>
        <MenuLink href="#">
          <MdDashboard />
          Dashboard
        </MenuLink>
        <MenuLink href="#">
          <MdArrowUpward />
          Paid In
        </MenuLink>
        <MenuLink href="#">
          <MdArrowDownward />
          Paid Out
        </MenuLink>
        <MenuLink href="#">
          <MdExitToApp />
          Log Out
        </MenuLink>
      </ContainerMenu>
    </AsideContainer>
  );
};

export default Aside;
