import { useIntl } from 'react-intl';
import { Header, Section } from './styled';
import { translate } from 'utils/translate';
import { advancedSearchSection } from 'config/mock-data';
import AdvancedFiltersSection from './search-result-section';
import { useFormikContext } from 'formik';

const SearchResults = () => {
  const values = useFormikContext();

  console.log('values', values)
    return (
        <div>
          <Header>{translate('advancedSearch.title')}</Header>
        </div>
    );
  }

export default SearchResults;
