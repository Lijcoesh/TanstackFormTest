import { Button } from "@mui/material";

interface IProps {
    showInlineErrors: boolean;
    onToggle: () => void;
}

export default function InlineErrorsToggleButton(props: IProps) {
    const { showInlineErrors, onToggle } = props;

    return (
        <Button 
            variant="contained" 
            onClick={onToggle}
            sx={{ textTransform: 'none', fontWeight: 600, backgroundColor: showInlineErrors ? 'error.main' : 'primary.main' }}
        >
            {showInlineErrors ? 'Hide Inline Errors' : 'Show Inline Errors'}
        </Button>
    );
}
