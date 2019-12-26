import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Layout } from './components/Layout'

export const App = (): React.ReactElement => (
  <div>
    <CssBaseline />
    <Layout>
      <h1>Hello World!</h1>
    </Layout>
  </div>
)
