import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useFieldContext } from '../form/form-context'
import type { NationalityType } from '../Types/NationalityType'

interface IProps {
    label: string
    id: string
}

export default function Dropdown(props: IProps) {
    const { label, id } = props

    const field = useFieldContext<string>()

    const nationalityOptions: NationalityType[] = [
        { id: 1, name: 'Netherlands', populationCount: 17000000 },
        { id: 2, name: 'Belgium', populationCount: 11500000 },
        { id: 3, name: 'France', populationCount: 67000000 },
        { id: 4, name: 'Germany', populationCount: 83000000 },
    ];

    return (
        <FormControl sx={{ mb: 2 }} fullWidth>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                value={field.state.value}
                label={label}
                onChange={(e) => field.handleChange(e.target.value)}
            >
                {nationalityOptions.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}