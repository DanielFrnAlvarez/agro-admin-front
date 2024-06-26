import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from '../../theme/theme';

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
