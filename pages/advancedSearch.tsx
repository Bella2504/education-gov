import { useEffect, useState } from 'react';
import { ButtonContainer, Container } from './styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../config/config';
import { IntlProvider } from 'react-intl';
import Polish from '../dictionaries/pl.json';
import English from '../dictionaries/en.json';
import { Button, CssBaseline } from '@mui/material';
import AdvancedFilters from 'components/advanced-filters';
import { Formik, useFormik } from 'formik';
import SearchResults from 'components/search-results';
import { translate } from 'utils/translate';

export default function AdvancedSearch() {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  /**const formik = useFormik({
    initialValues: {
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });*/

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
      <IntlProvider locale={local} messages={lang}>
        <Formik initialValues={{}} onSubmit={(values) => console.log("values", values)}>
        {props => (
           <form onSubmit={() => props.handleSubmit(props.values as any)}>
                {isSubmitted ? <SearchResults/> : <AdvancedFilters/>}
                {!isSubmitted && <ButtonContainer>
                    <Button variant="contained" disabled={Object.keys(props.values).length === 0} onClick={() => { setIsSubmitted(true); console.log(props)}}>
                        {translate('advancedSearch-search')}
                    </Button></ButtonContainer>}
            </form>
        )}
        </Formik >
      </IntlProvider>
      </Container>
    </ThemeProvider>
  );
}