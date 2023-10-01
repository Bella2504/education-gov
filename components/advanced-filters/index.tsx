import { useIntl } from 'react-intl';
import { Header, Section } from './styled';
import { translate } from 'utils/translate';
import { advancedSearchSection } from 'config/mock-data';
import AdvancedFiltersSection from './advanced-filter-section';
import SearchHeader from './search-header';

const AdvancedFilters = () => {

    return (
        <div>
          <Header>{translate('advancedSearch-title')}</Header>
          <SearchHeader />
          {
            advancedSearchSection.map((section) => <Section>
                <AdvancedFiltersSection {...section} key={section.name}/>
              </Section>)
          }
        </div>
    );
  }

export default AdvancedFilters;
