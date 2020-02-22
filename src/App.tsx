import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationRoutes } from '@constants/Navigation';
import { Layout } from './components/Layout';
import { theme } from './theme/default';

export const App = (): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Layout>
        <Switch>
          {NavigationRoutes.map(
            ({ to, id, component }) =>
              component && (
                <Route
                  key={`route-${id}`}
                  path={to}
                  component={component}
                  exact
                />
              ),
          )}
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>
);
