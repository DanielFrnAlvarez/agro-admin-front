import React from 'react';
import { ColorModeContext, useMode } from '../../theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, colorMode } = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default MainLayout;
