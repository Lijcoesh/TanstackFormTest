import { useState } from "react";
import { Step1 } from "./StepsComponents/Step1/Step1";
import { Step2 } from "./StepsComponents/Step2/Step2";
import { Step3 } from "./StepsComponents/Step3/Step3";
import { useAppForm } from "./form/form";
import { registerFormOpts } from "./form/shared";
import StepButton from "./formComponents/StepButton";

export default function RegisterFormInStepsV1() {
    const [currentStep, setCurrentStep] = useState(0);
    const [disablePreviousButton, setDisablePreviousButton] = useState(false)
    const [disableNextButton, setDisableNextButton] = useState(false)

    const form = useAppForm({
        ...registerFormOpts,
        onSubmit: (values) => {
            console.log(values, "form submitted")
        }
    })

    const handlePreviousStep = () => {
        setDisableNextButton(false);
        if(currentStep == 1) {
            setDisablePreviousButton(true);
        }
        setCurrentStep((prevStep) => prevStep - 1);
    }

    const handleNextStep = () => {
        setDisablePreviousButton(false);
        if(currentStep == 1) {
            setDisableNextButton(true);
        }
        setCurrentStep((prevStep) => prevStep + 1);
    }

    {/* form.AppForm should be replaced with RegisterFormInStepsSteps, but can't seem to get it done */}
    return(
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <div>
                <h4>Form Features:</h4>
                <ul>
                    <li>Using TanStack Form</li>
                    <li>with seperate components for fields</li>
                    <li>Using a reusable component for password fields</li>
                </ul>
                <h4>Changes since last version:</h4>
                <ul>
                    <li>Form is now separated into steps</li>
                </ul>
            </div>
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
            <StepButton onClick={handlePreviousStep} disabled={disablePreviousButton} text="Previous" />
            <StepButton onClick={handleNextStep} disabled={disableNextButton} text="Next" />
        </div>
    )
}