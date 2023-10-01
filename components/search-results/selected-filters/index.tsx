import { useFormikContext } from 'formik';
import { Section } from './styled';
import { advancedSearchSection } from 'config/mock-data';
import SelectedFiltersSection from './selected-filters-section';
import { translate } from 'utils/translate';
import { Button, Box } from '@mui/material';
import Image from 'next/image'

const SelectedFilters = () => {
    const { setValues } = useFormikContext();

    return (
        <div>
            <Box
                height={'100%'}
                minWidth={'calc(274px + 5%)'}
                maxWidth={'250px'}
                sx={{ display: 'flex', flexDirection: 'row', justifyContent: "end", alignItems: "center" }}
                p={1}
                border="1px solid white !important"
            >
                <Button variant="text" onClick={() => { setValues({})}}>
                    {translate('searchResults-userData-clearFilters')}
                </Button>
                <Image
                    src="/filter_alt.svg"
                    alt="clear filters"
                    width={24}
                    height={24}
                    priority
                />
            </Box>
            {
                advancedSearchSection.map((section) => <Section key={section.name}>
                    <SelectedFiltersSection {...section} />
                </Section>)
            }
        </div>
    );
  }

export default SelectedFilters;
