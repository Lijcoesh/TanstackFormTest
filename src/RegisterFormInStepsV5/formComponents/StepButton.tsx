import { Button } from "@mui/material"

interface IProps {
    onClick: () => void
    disabled: boolean
    text: string
}

export default function StepButton(props: IProps) {
    const { onClick, disabled, text } = props

    return (
        <Button 
            onClick={onClick} 
            disabled={disabled}
            variant="contained"
        >
            {text}
        </Button>
    )
}