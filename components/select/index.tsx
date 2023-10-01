import { InputLabel, MenuItem, Select  } from '@mui/material';
import { translate } from 'utils/translate';
import { Container } from './styled';
import { useField } from 'formik';

interface Props {
    options: string[];
    elementId: string;
    name: string;
}

const CustomSelect = ({ options, elementId, name }: Props) => {
        const [field] = useField(elementId);

        return <Container>
            <InputLabel htmlFor={elementId}>{translate(name)}</InputLabel>
            <Select
                labelId={elementId}
                id={elementId}
                name={elementId}
                label={elementId}
                multiple
                defaultValue={[field.value]}
                onChange={field.onChange}
                //onChange={handleChange}
        >{
            options.map((value) => <MenuItem value={value}>
              {translate(value)}
            </MenuItem>)
        }
        </Select>
      </Container>
  }

export default CustomSelect;
