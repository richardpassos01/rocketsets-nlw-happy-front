import Home from '../../pages/Home';
import Orphanages from '../../pages/Orphanages';
import NotFound from '../../pages/NotFound';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { APP_ROUTES } from '../../utils/enums/internal-routes';
import GlobalStyle from './App.styles';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path={APP_ROUTES.HOME} component={Home} />
        <Route path={APP_ROUTES.ORPHANAGES} component={Orphanages} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
