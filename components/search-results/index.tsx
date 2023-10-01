import { Grid } from '@mui/material';
import { Description, Header } from './styled';
import { translate } from 'utils/translate';
import SelectedFilters from './selected-filters';
import SelectedResultList from './search-result-section';

const SearchResults = () => {
    return (
        <div>
            <Grid container sx={{ p: 2 }} rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} md={4}>
                  <SelectedFilters />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Header>{translate('searchResults-title')}</Header>
                  <Description>{translate('searchResults-description')}</Description>
                  <SelectedResultList />
                </Grid>
            </Grid>
        </div>
    );
  }

export default SearchResults;
