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
        <Grid container sx={{ p: 2 }} rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={2} lg={4} >
                <Box
                    height={'100%'}
                    minWidth={'100%'}
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: "start", alignItems: "center" }}
                    p={2}
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
           <Grid item xs={12} md={10} lg={8}>
                <Grid container sx={{ p: 2 }} rowSpacing={2} columnSpacing={2}>
                    {
                        options
                        .map((option) => 
                        <Grid item xs={12} md={6}>
                            <CustomSelect elementId={name} options={option.options} name={translate(name)}/>
                        </Grid>
                        )
                    }
                </Grid>
           </Grid>
        </Grid>
    );
  }

export default AdvancedFiltersSection;
