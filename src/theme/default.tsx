import blueGrey from '@material-ui/core/colors/blueGrey'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: blueGrey.A400,
    },
    background: {
      default: '#fff',
    },
  },
})
