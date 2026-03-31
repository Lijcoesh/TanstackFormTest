import { useFieldContext } from "../../RegisterFormV4/form/form-context"

interface IProps {
    label: string
    id: string
    type?: string
}

export default function TextInput(props: IProps) {
    const { label, id, type } = props

    const field = useFieldContext<string>()

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input className="form-input" 
                type={type || "text"}
                id={id}
                name={id}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder={label}
            />
        </>
    )
}