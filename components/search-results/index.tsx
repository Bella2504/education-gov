import { useIntl } from 'react-intl';
import { Header, Section } from './styled';
import { translate } from 'utils/translate';
import { Grid } from '@mui/material';
import SelectedFilters from './selected-filters';
import SelectedResultList from './search-result-section';

const SearchResults = () => {
    return (
        <div>
          <Header>{translate('advancedSearch-title')}</Header>
            <Grid container sx={{ p: 2 }} rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} md={4}>
                  <SelectedFilters />
                </Grid>
                <Grid item xs={12} md={8}>
                  <SelectedResultList />
                </Grid>
            </Grid>
        </div>
    );
  }

export default SearchResults;
