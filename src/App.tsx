import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationLinks } from '@constants/Navigation';
import { Layout } from './components/Layout';
import { theme } from './theme/default';

export const App = (): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Layout>
        <Switch>
          {NavigationLinks.map(
            ({ to, title, component }) =>
              component && (
                <Route
                  key={`route-${title.toLocaleLowerCase().replace(' ', '-')}`}
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
