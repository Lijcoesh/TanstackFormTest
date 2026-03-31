import { useFormContext } from "../form/form-context"

export default function ErrorSummary() {
    const form = useFormContext()

    return (
        <form.Subscribe selector={(state) => state.fieldMeta}>
            {(fieldMeta) => {
                const errors = Object.entries(fieldMeta as Record<string, { errors?: string[] }>)
                    .flatMap(([fieldName, meta]) => 
                        meta?.errors?.map((message: string) => ({ fieldName, message })) ?? []
                    )

                if (!errors.length) return null

                return (
                    <div className="error-summary">
                        <div className="error-summary-title">Please fix the following errors:</div>
                        <ul className="error-list">
                            {errors.map(({ fieldName, message }, index) => (
                                <li key={index}>
                                    <strong>{fieldName}:</strong> {message}
                                </li>
                            ))}    
                        </ul>
                    </div>
                )
            }}
        </form.Subscribe>
    )
}