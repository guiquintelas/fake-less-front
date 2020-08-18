import React from 'react';
import Container from '@material-ui/core/Container';
import { Box, styled } from '@material-ui/core';
import Login from './pages/Login';

const Root = styled(Box)({
  display: 'flex',
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
});

const App: React.FC = () => (
  <Root>
    <Container component="main" maxWidth="lg">
      <Login />
    </Container>
  </Root>
);

export default App;
