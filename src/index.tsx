import React from 'react';
import ReactDOM from 'react-dom';
import grey from '@material-ui/core/colors/grey';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import UserProvider from './contexts/UserContext';

let theme = createMuiTheme();

theme = {
  ...theme,
  overrides: {
    MuiButton: {
      root: {
        color: grey[600],
      },
    },
    MuiInputBase: {
      root: {
        marginBottom: '22px',
      },
      input: {
        color: theme.palette.text.primary,
      },
      adornedStart: {
        color: grey[600],
      },
    },
    MuiFormHelperText: {
      root: {
        marginTop: '-19px',
      },
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
  },
};

ReactDOM.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
