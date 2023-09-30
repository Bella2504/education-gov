import { createTheme } from "@mui/material";
import { Open_Sans } from 'next/font/google'
 
export const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const theme = createTheme({
    palette: {
        primary: {
          light: '#B3CBE4',
          main: '#0052A5',
          contrastText: 'white',
          dark: '#003D7A'
        },
    },
    typography: {
      fontFamily: open_sans.style.fontFamily,
      fontSize: 10,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face ${open_sans.style}

          body {
            margin: 0!important;
          }

          .MuiBox-root {
            border: none;
          }
        `,
      },
    },
  });