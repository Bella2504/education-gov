import { createTheme } from "@mui/material";
import { Open_Sans } from 'next/font/google'
 
export const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const theme = createTheme({
    palette: {
        primary: {
          main: '#1976d2',
          contrastText: 'white',
        },
    },
    typography: {
      fontFamily: open_sans.style.fontFamily,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face ${open_sans.style}
        `,
      },
    },
  });