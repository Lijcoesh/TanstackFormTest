interface IProps {
    onClick: () => void
    disabled: boolean
    text: string
}

export default function StepButton(props: IProps) {
    const { onClick, disabled, text } = props

    return (
        <button 
            className="next-btn" 
            type="button" 
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}