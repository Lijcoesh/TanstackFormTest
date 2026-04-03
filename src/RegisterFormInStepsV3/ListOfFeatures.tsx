import { Box, List, ListItem, Typography } from "@mui/material";

export default function ListOfFeatures() {
    return(
        <Box>
            <Typography variant="h4">Form Features:</Typography>
            <Box sx={{ mb: 3, fontFamily: '"Segoe UI", "Roboto", sans-serif'}}>
                <Typography variant="h6">Form Features:</Typography>
                <List>
                    <ListItem>- Using TanStack Form</ListItem>
                    <ListItem>- with seperate components for fields</ListItem>
                    <ListItem>- Using a reusable component for password fields</ListItem>
                    <ListItem>- Seperated form into steps</ListItem>
                    <ListItem>- Seperate logic and UI into different components</ListItem>
                </List>
                <Typography variant="h6">Changes since last version:</Typography>
                <List>
                    <ListItem>- Use Material UI</ListItem>
                </List>
            </Box>
        </Box>
    )
}