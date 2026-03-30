import { useFieldContext } from "./form-context"

interface IProps {
    label: string
    description?: string
    id: string
}

export default function TextInput(props: IProps) {
    const { label, id } = props

    const field = useFieldContext<string>()

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input className="form-input" 
                type="text"
                id={id}
                name={id}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder={label}
            />
            {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(', ')}</em>
            )}
        </>
    )
}