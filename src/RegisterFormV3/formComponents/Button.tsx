import { useFormContext } from "../form/form-context"

export default function FormButton() {
    const form = useFormContext()

    return (
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
    )
}