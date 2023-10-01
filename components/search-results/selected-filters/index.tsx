import { Section } from './styled';
import { advancedSearchSection } from 'config/mock-data';
import SelectedFiltersSection from './selected-filters-section';

const SelectedFilters = () => {
    return (
        <div>
                {
                    advancedSearchSection.map((section) => <Section>
                        <SelectedFiltersSection {...section} />
                    </Section>)
                }
        </div>
    );
  }

export default SelectedFilters;
