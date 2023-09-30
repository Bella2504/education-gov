import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/form/header';
import Form from '../components/form';
import { Container } from './styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../config/config';
import { IntlProvider } from 'react-intl';
import Polish from '../dictionaries/pl.json';
import English from '../dictionaries/en.json';
import { CssBaseline } from '@mui/material';

export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
      setHydrated(true);
  }, []);
  if (!hydrated) {
      // Returns null on first render, so the client and server match
      return null;
  }

  const local = typeof window !== "undefined"  ? window.navigator.language : 'pl';
  const lang = local === 'pl' ?  Polish : English;
  console.log(lang)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
      <IntlProvider locale={local} messages={lang}>
        <Header />
      </IntlProvider>
      </Container>
    </ThemeProvider>
  );
}
