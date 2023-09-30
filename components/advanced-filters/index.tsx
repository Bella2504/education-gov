import { useIntl } from 'react-intl';
import { Header, Section } from './styled';
import { translate } from 'utils/translate';
import { advancedSearchSection } from 'config/mock-data';
import AdvancedFiltersSection from './advanced-filter-section';
const AdvancedFilters = () => {

    return (
        <div>
          <Header>{translate('advancedSearch.title')}</Header>
          {
            advancedSearchSection.map((section) => <Section>
                <AdvancedFiltersSection {...section} />
              </Section>)
          }
        </div>
    );
  }

export default AdvancedFilters;
