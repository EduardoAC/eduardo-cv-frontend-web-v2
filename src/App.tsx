import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { Layout } from './components/Layout';
import { theme } from './theme/default';

export const App = (): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <h1>Hello World!</h1>
    </Layout>
  </ThemeProvider>
);
