import { useAppForm } from "./form/form"
import { registerFormOpts } from "./form/shared"
import { Step1 } from "./StepsComponents/Step1/Step1"
import { Step2 } from "./StepsComponents/Step2/Step2"
import { Step3 } from "./StepsComponents/Step3/Step3"

interface IProps {
    currentStep: number
}

export function RegisterFormInStepsSteps(props: IProps) {
    const { currentStep } = props

    const form = useAppForm({
        ...registerFormOpts,
        onSubmit: (values) => {
            console.log(values, "form submitted")
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
                <div className="form-row">
                    <div style={{ display: currentStep === 0 ? 'block' : 'none' }}>
                        <Step1 form={form} />
                    </div>
                    <div style={{ display: currentStep === 1 ? 'block' : 'none' }}>
                        <Step2 form={form} />
                    </div>
                    <div style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                        <Step3 form={form} />
                    </div>
                </div>   
                <form.SubmitButton />
            </form>
        </form.AppForm>
    )
}