import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { useIntl } from 'react-intl';

interface Props {
    options: {value: any, label: string}[];
    elementId: string;
    name: string;
}

const CustomSelect = ({ options, elementId, name }: Props) => {
  const intl = useIntl();

    return (
        <div>
            <InputLabel htmlFor={elementId}>{intl.formatMessage({
              id: name
            })}</InputLabel>
            <Select
                labelId={elementId}
                id={elementId}
                label={name}
                //onChange={handleChange}
        >{
            options.map(({ value, label }) => <MenuItem value={value}>
              {label}
            </MenuItem>)
        }
        </Select>
      </div>
    );
  }

export default CustomSelect;
