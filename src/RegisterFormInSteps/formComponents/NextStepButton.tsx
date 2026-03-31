interface IProps {
    onClick: () => void
    disabled: boolean
}

export default function NextStepButton(props: IProps) {
    const { onClick, disabled } = props

    return (
        <button 
            className="next-btn" 
            type="button" 
            onClick={onClick}
            disabled={disabled}
        >
            Next
        </button>
    )
}