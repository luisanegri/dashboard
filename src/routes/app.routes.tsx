import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout/index';
import Dashboard from '../pages/Dashboard/index';
import List from '../pages/List/index';

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/dashboard" exact component={Dashboard}></Route>
      <Route path="/list/:type" exact component={List}></Route>
    </Switch>
  </Layout>
);

export default AppRoutes;
