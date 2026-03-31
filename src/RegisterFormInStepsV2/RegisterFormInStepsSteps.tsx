import { withForm } from "./form/form"
import { registerFormOpts } from "./form/shared"
import { Step1 } from "./StepsComponents/Step1/Step1"
import { Step2 } from "./StepsComponents/Step2/Step2"
import { Step3 } from "./StepsComponents/Step3/Step3"

interface IProps {
    currentStep: number
    showSubmitButton: boolean
}

export const RegisterFormInStepsSteps = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <form.AppForm>
                <form className="register-form"
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                >
                    <div className="form-row">
                        {currentStep === 0 && (
                            <Step1 form={form} />
                        )} 
                        {currentStep === 1 && (
                            <Step2 form={form} />
                        )}
                        {currentStep === 2 && (
                            <Step3 form={form} />
                        )}
                    </div>
                    <form.SubmitButton />
                </form>
            </form.AppForm>
        )
    }
})