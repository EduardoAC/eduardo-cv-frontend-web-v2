import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { theme } from './theme/default';
import { Homepage } from './page/Homepage';

export const App = (): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <Router>
        <Switch>
          <Route path="/about">
            <h1>about</h1>
          </Route>
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </Layout>
  </ThemeProvider>
);
