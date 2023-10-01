import {uniq} from 'lodash';
import { InputLabel, MenuItem, Select  } from '@mui/material';
import { translate } from 'utils/translate';
import { Container } from './styled';
import { useField, useFormikContext } from 'formik';

interface Props {
    options: string[];
    elementId: string;
    name: string;
}

const CustomSelect = ({ options, elementId, name }: Props) => {
        const [field] = useField(elementId);
        const {setFieldValue} = useFormikContext<any>();
        return <Container>
            <InputLabel htmlFor={elementId}>{name}</InputLabel>
            <Select
                labelId={elementId}
                id={elementId}
                name={elementId}
                label={elementId}
                multiple
                value={field.value || []}
                onChange={(val) => {
                  const value = val.target.value as any[] || [];
                  setFieldValue(elementId, value)
                }
              }
        >{
            options.map((value) => <MenuItem key={value} value={value}>
              {translate(value)}
            </MenuItem>)
        }
        </Select>
      </Container>
  }

export default CustomSelect;
