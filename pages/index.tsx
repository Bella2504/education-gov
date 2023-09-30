import Head from 'next/head';
import Header from './header';
import Form from './form';
import { Container } from './styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from './config';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Form />
      </Container>
    </ThemeProvider>
  );
}
