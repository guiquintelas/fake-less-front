import React, { createContext, useContext, useState } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from 'mdi-material-ui';

type SnackBarContextType = {
  snackBar: (text: string) => void;
};

export const SnackBarContext = createContext<SnackBarContextType>({
  snackBar: () => {
    throw new Error('state not initialized');
  },
});

const SnackBarProvider: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [text, setText] = useState('');

  return (
    <SnackBarContext.Provider
      value={{
        snackBar: (snackText) => {
          setOpen(true);
          setText(snackText);
        },
      }}
    >
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={isOpen}
        autoHideDuration={4000}
        message={text}
        onClose={(_, reason) => {
          if (reason === 'clickaway') {
            return;
          }

          setOpen(false);
        }}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        }
      />
    </SnackBarContext.Provider>
  );
};

export default SnackBarProvider;

export function useSnackBarContext() {
  return useContext(SnackBarContext);
}
