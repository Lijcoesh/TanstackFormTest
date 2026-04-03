import { Box } from "@mui/material"
import { useAppForm } from "./form/form"
import { registerFormOpts } from "./form/shared"
import { Step1 } from "./StepsComponents/Step1/Step1"
import { Step2 } from "./StepsComponents/Step2/Step2"
import { Step3 } from "./StepsComponents/Step3/Step3"

interface IProps {
    currentStep: number
}

export function RegisterFormInStepsSteps({ currentStep }: IProps) {
    const form = useAppForm({
        ...registerFormOpts,
        onSubmit: (values) => {
            console.log(values, "form submitted")
            console.log(values.value.nationality.populationCount, "population count")
            alert(`Population Count: ${values.value.nationality.populationCount}`)
        }
    })

    return (
        <form.AppForm>
            <form className="register-form"
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
            >
                <form.ErrorSummary />
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
    )
}