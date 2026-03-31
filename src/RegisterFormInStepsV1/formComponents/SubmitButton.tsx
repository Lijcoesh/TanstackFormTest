import { useFormContext } from "../form/form-context"

export default function SubmitButton() {
    const form = useFormContext()

    return (
        <div className="form-row actions">
            <form.Subscribe selector={(state) => state.canSubmit}>
                {(canSubmit) => (
                    <button 
                        className="submit-btn" 
                        type="submit" 
                        disabled={!canSubmit}
                    >
                        Submit
                    </button>
                )}
            </form.Subscribe>
        </div>
    )
}