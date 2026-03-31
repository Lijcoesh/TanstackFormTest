import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useFieldContext } from '../form/form-context'

interface IProps {
    label: string
    id: string
}

export default function Dropdown(props: IProps) {
    const { label, id } = props

    const field = useFieldContext<string>()

    return (
        <FormControl sx={{ mb: 2 }} fullWidth>
            <InputLabel 
                id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                value={field.state.value}
                label={label}
                onChange={(e) => field.handleChange(e.target.value)}
            >
                <MenuItem value="Netherlands">Netherlands</MenuItem>
                <MenuItem value="belgium">Belgium</MenuItem>
                <MenuItem value="france">France</MenuItem>
                <MenuItem value="germany">Germany</MenuItem>
            </Select>
        </FormControl>
    )
}