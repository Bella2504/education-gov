import { Box, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useIntl } from 'react-intl';

interface Props {
    options: {value: any, label: string}[];
    elementId: string;
    name: string;
}

const CustomRadioGroup = ({ options, elementId, name }: Props) => {
    const intl = useIntl();

    const renderOption = (n: any) => {
        return intl.formatMessage({
            id: n
        })
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <FormLabel htmlFor={elementId} id={elementId}>
                {renderOption(name)}
             </FormLabel>
            <RadioGroup
                aria-labelledby={elementId}
                defaultValue="female"
                name={name}
                id={elementId}
            >
                {
                options.map(({value, label}) =>
                    <FormControlLabel
                        value={renderOption(value)}
                        control={<Radio />} label={renderOption(label)} />
                )}
            </RadioGroup>
      </Box>
    );
  }

export default CustomRadioGroup;
