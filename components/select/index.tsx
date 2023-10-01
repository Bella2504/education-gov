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
            <InputLabel htmlFor={elementId}>{translate(name)}</InputLabel>
            <Select
                labelId={elementId}
                id={elementId}
                name={elementId}
                label={elementId}
                multiple
                defaultValue={field.value || []}
                onChange={(val) => {
                  const value = val.target.value as any[] || [];
                  if (field.value?.includes((v:any) => value.includes(v))) {
                    const updatedValues = field.value?.filter((v: any) => !value.includes(v) && v!==undefined);
                    setFieldValue(elementId, updatedValues)
                  } else {
                    const updatedValues = uniq([...[...(field.value ?? [])], ...value].filter((v) => v!==undefined));
                    console.log('add', updatedValues)
                    setFieldValue(elementId, updatedValues)
                  }
                }
                }
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
