import { TextField } from '@mui/material'
import { useFieldContext } from '../form/form-context'

interface IProps {
    label: string
    id: string
    type?: string
}

export default function TextInput(props: IProps) {
    const { label, id, type } = props

    const field = useFieldContext<string>()

    return (
        <TextField
            id={id}
            placeholder={label}
            type={type || 'text'}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            fullWidth
            variant="outlined"
            size="medium"
            sx={{
                mb: 2,
                '& .MuiInputBase-input::placeholder': {
                    opacity: 0.7,
                },
            }}
        />
    )
}