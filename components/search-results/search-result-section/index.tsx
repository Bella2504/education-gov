import { Box, Grid } from '@mui/material';
import { filterValues } from 'utils/filter';
import { useFormikContext } from 'formik';

const SelectedResultList = () => {
    const { values } = useFormikContext();
    const filteredValues = filterValues(values);
    return (
        <Grid container sx={{ p: 2 }} rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={2} lg={4} >

           </Grid>
        </Grid>
    );
  }

export default SelectedResultList;
