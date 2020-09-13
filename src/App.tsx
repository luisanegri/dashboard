import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';

import Layout from './components/Layout/index';
import Dashboard from './pages/Dashboard';
import List from './pages/List/index';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
        {/* <Dashboard /> */}
      </Layout>
    </ThemeProvider>
  );
};

export default App;
