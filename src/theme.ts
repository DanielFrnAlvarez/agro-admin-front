import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { darkModeTokens, fontFamily, lightModeTokens, whiteApp } from "./utils/designTokens";

// Definimos la interfaz para el modo
type Mode = 'dark' | 'light';

// color design tokens
export const designTokens = ({ mode }: { mode: Mode }) => ({
  ...(mode === 'dark'
    ? darkModeTokens
    : lightModeTokens
  )
});

// mui theme settings

export const themeSettings = ({ mode }: { mode: Mode }) => {
  const colors = designTokens({ mode });

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
          primary: { main: colors.primary[500], },
          secondary: { main: colors.greenAccent[500] },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100]
          },
          background: { default: colors.primary[500] }
        }
        : {
          primary: { main: colors.primary[100], },
          secondary: { main: colors.greenAccent[500] },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100]
          },
          background: { default: whiteApp }
        }),
    },
    typography: {
      fontFamily: fontFamily,
      fontSize: 12,
      h1: {
        fontFamily: fontFamily,
        fontSize: 40,
      },
      h2: {
        fontFamily: fontFamily,
        fontSize: 32,
      },
      h3: {
        fontFamily: fontFamily,
        fontSize: 24,
      },
      h4: {
        fontFamily: fontFamily,
        fontSize: 20,
      },
      h5: {
        fontFamily: fontFamily,
        fontSize: 16,
      },
      h6: {
        fontFamily: fontFamily,
        fontSize: 14,
      },
    }
  };
};

// context for the color model
export const ColorModeContext = createContext({
  toggleColorMode: () => { }
})

export const useMode = () => {
  const [mode, setMode] = useState<Mode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings({ mode })), [mode]);

  return [theme, colorMode];
}