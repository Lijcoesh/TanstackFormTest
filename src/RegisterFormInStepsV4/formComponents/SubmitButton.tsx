import { Button } from "@mui/material"
import { useFormContext } from "../form/form-context"

export default function SubmitButton() {
    const form = useFormContext()

    return (
        <div className="form-row actions">
            <form.Subscribe selector={(state) => state.canSubmit}>
                {(canSubmit) => (
                    <Button 
                        type="submit" 
                        disabled={!canSubmit} 
                        variant="contained"
                        sx={{ mb: 2}}
                    >
                        Submit
                    </Button>
                )}
            </form.Subscribe>
        </div>
    )
}