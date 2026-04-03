import "../Styling/RegisterForm.css"
import { registerFormOpts } from "./form/shared"
import { useAppForm } from "./form/form"
import { UserInformation } from "./components/UserInformation"
import { AdditionalInfo } from "./components/AdditionalInfo"
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material"

export default function RegisterForm() {
    const form = useAppForm({
        ...registerFormOpts,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return(
        <Box className="register-container">
            <Typography variant="h3" className="register-title" gutterBottom>Register</Typography>
            <Box mb={2}>
                <Typography variant="h6">Form Features:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemText primary="Using TanStack Form" />
                    </ListItem>
                </List>
                <Typography variant="h6">Changes since last version:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemText primary="Seperated fields into seperate components" />
                    </ListItem>
                </List>
            </Box>
            <form.AppForm>
                <form className="register-form" 
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                >
                    <Box className="form-row">
                        <UserInformation form={form} />
                        <AdditionalInfo form={form} />
                    </Box>
                    <form.FormButton />
                </form>
            </form.AppForm>
        </Box>
    )
}