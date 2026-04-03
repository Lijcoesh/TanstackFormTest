import { TextField, Box, FormHelperText } from '@mui/material'
import { useFieldContext } from '../form/form-context'
import { useInlineErrors } from '../form/InlineErrorsContext'

interface IProps {
    label: string
    id: string
    type?: string
}

export default function TextInput(props: IProps) {
    const { label, id, type } = props
    const showInlineErrors = useInlineErrors()

    const field = useFieldContext<string>()
    const hasErrors = field.state.meta.errors && field.state.meta.errors.length > 0

    return (
        <Box>
            <TextField
                id={id}
                placeholder={label}
                type={type || 'text'}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                fullWidth
                variant="outlined"
                size="medium"
                error={showInlineErrors && hasErrors}
                sx={{
                    mb: showInlineErrors && hasErrors ? 0.5 : 2,
                    '& .MuiInputBase-input::placeholder': {
                        opacity: 0.7,
                    },
                }}
            />
            {showInlineErrors && hasErrors && (
                <FormHelperText error sx={{ ml: 0, mb: 2 }}>
                    {field.state.meta.errors[0]}
                </FormHelperText>
            )}
        </Box>
    )
}