import { List, ListItem, Typography, Alert } from "@mui/material"
import { useFormContext } from "../form/form-context"

export default function ErrorSummary() {
    const form = useFormContext()

    return (
        <form.Subscribe selector={(state) => state.fieldMeta}>
            {(fieldMeta) => {
                const errors = Object.entries(fieldMeta as Record<string, { errors?: string[] }>)
                    .flatMap(([fieldName, meta]) => meta?.errors?.map((message) => ({ fieldName, message })) || [])

                if (!errors.length) return null

                return (
                    <Alert severity="error">
                        <Typography variant="h6" sx={{ fontWeight: 600}}>
                            Please fix the following errors:
                        </Typography>
                        <List sx={{ p: 0, m: 0 }}>
                            {errors.map(({ fieldName, message }, index) => (
                                <ListItem 
                                    key={index} 
                                    sx={{ 
                                        py: 0.5, 
                                        px: 0,
                                        '&:before': { content: '"• "', mr: 1 }
                                    }}
                                >
                                    <strong>{fieldName}:</strong>&nbsp;{message}
                                </ListItem>
                            ))}
                        </List>
                    </Alert>
                )
            }}
        </form.Subscribe>
    )
}