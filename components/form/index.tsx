import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import CustomRadioGroup from 'components/custom-radio-group';
import { chooseModeOptions } from 'config/mock-data';

export default function Form() {
    return (
        <FormControl fullWidth={true} >
            <CustomRadioGroup
                options={chooseModeOptions}
                elementId={'selectMode'}
                name={'selectMode'}
            />
        </FormControl>
    );
  }