import { useFieldContext } from "../form/form-context"

interface IProps<T> {
    label: string
    id: string
}

export default function Dropdown<T>(props: IProps<T>) {
    const { label, id } = props

    const field = useFieldContext<T>()

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select className="form-input"
                id={id}
                name={id}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
            >
                <option value="">Netherlands</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
            </select>
            {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(', ')}</em>
            )}
        </>
    )
}