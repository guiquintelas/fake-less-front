import React from 'react';
import ReactDOM from 'react-dom';
import grey from '@material-ui/core/colors/grey';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import App from './App';

const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        color: grey[600],
      },
    },
    MuiButton: {
      root: {
        color: grey[600],
      },
    },
    MuiInputBase: {
      root: {
        marginBottom: '22px',
      },
    },
    MuiFormHelperText: {
      root: {
        marginTop: '-19px',
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
