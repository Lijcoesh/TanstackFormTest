import { Box } from "@mui/material"
import { useAppForm } from "./form/form"
import { registerFormOpts } from "./form/shared"
import { Step1 } from "./StepsComponents/Step1/Step1"
import { Step2 } from "./StepsComponents/Step2/Step2"
import { Step3 } from "./StepsComponents/Step3/Step3"
import { InlineErrorsContext } from "./form/InlineErrorsContext"

interface IProps {
    currentStep: number
    showInlineErrors: boolean
}

export function RegisterFormInStepsSteps(props: IProps) {
    const { currentStep, showInlineErrors } = props

    const form = useAppForm({
        ...registerFormOpts,
        onSubmit: (values) => {
            console.log(values, "form submitted")
            console.log(values.value.nationality.populationCount, "population count")
            alert(`Population Count of ${values.value.nationality.name}: ${values.value.nationality.populationCount}`)
        }
    })

    return (
        <InlineErrorsContext.Provider value={showInlineErrors}>
            <form.AppForm>
                <form className="register-form"
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                >
                    {!showInlineErrors && <form.ErrorSummary />}
                    <Box>
                        <Box sx={{ display: currentStep === 0 ? 'block' : 'none' }}>
                            <Step1 form={form} />
                        </Box>
                        <Box sx={{ display: currentStep === 1 ? 'block' : 'none' }}>
                            <Step2 form={form} />
                        </Box>
                        <Box sx={{ display: currentStep === 2 ? 'block' : 'none' }}>
                            <Step3 form={form} />
                        </Box>
                    </Box>
                    <form.SubmitButton />
                </form>
            </form.AppForm>
        </InlineErrorsContext.Provider>
    )
}