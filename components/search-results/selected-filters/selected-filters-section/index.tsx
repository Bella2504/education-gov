import { useIntl } from 'react-intl';
import Image from 'next/image'
import { translate } from 'utils/translate';
import { Header } from './styled';
import { Box, Grid } from '@mui/material';
import CustomSelect from 'components/select';

interface Props {
    image: string,
    options: { name: string, options: string[] }[],
    name: string,
}

const AdvancedFiltersSection = (section: Props) => {
  const { image, options, name} = section;

    return (
        <Grid container sx={{ p: 1 }}>
            <Grid item xs={12}>
                <Box
                    height={'100%'}
                    minWidth={'100%'}
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: "start", alignItems: "center" }}
                    p={1}
                    border="1px solid white !important"
                    >
                    <Image
                        src={`/${image}.svg`}
                        alt={image}
                        width={24}
                        height={24}
                        priority
                    />
                    <Header>{translate(name)}</Header>
                </Box>
           </Grid>
           <Grid item xs={12}>
                <Grid container sx={{ py: 1 }}>
                    {
                        options
                            .map((option) => 
                                <Grid sx={{ py: 1 }} key={option.name} item xs={12} md={12}>
                                    <CustomSelect elementId={option.name} options={option.options} name={translate(option.name)}/>
                                </Grid>
                            )
                    }
                </Grid>
           </Grid>
        </Grid>
    );
  }

export default AdvancedFiltersSection;
