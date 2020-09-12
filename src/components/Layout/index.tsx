import React from 'react';
import { Grid } from './styles';

import Header from '../Header';
import Content from '../Content';
import Aside from '../Aside';

const Layout: React.FC = () => {
  return (
    <Grid>
      <Aside />
      <Header />
      <Content />
    </Grid>
  );
};

export default Layout;
