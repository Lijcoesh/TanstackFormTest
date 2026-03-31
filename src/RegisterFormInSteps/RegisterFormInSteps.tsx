import { useState } from "react";
import { Step1 } from "./StepsComponents/Step1/Step1";
import { Step2 } from "./StepsComponents/Step2/Step2";
import { Step3 } from "./StepsComponents/Step3/Step3";
import { useAppForm } from "./form/form";
import { registerFormOpts } from "./form/shared";
import StepButton from "./formComponents/StepButton";
import type { RegisterFormvalues } from "../RegisterFormV3/RegisterFormValues";

export default function RegisterFormInSteps() {
    const [currentStep, setCurrentStep] = useState(0);
    const [disablePreviousButton, setDisablePreviousButton] = useState(false)
    const [disableNextButton, setDisableNextButton] = useState(false)
    const [showSubmitButton, setShowSubmitButton] = useState(false)
    
    const handleSubmit = (values: RegisterFormvalues) => {
        console.log(values)
    }

    const form = useAppForm({
        ...registerFormOpts,
        onSubmit: ({ value }) => handleSubmit(value),
    })

    const handlePreviousStep = () => {
        setDisableNextButton(false);
        setShowSubmitButton(false);
        if(currentStep == 1) {
            setDisablePreviousButton(true);
        }
        setCurrentStep((prevStep) => prevStep - 1);
    }

    const handleNextStep = () => {
        setDisablePreviousButton(false);
        if(currentStep == 1) {
            setDisableNextButton(true);
            setShowSubmitButton(true);
        }
        setCurrentStep((prevStep) => prevStep + 1);
    }

    {/* form.AppForm should be replaced with RegisterFormInStepsSteps, but can't seem to get it done */}
    return(
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <p> form in steps created using TanStack Form with separate components, using a reusable component for password fields </p>
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
                </form>
                {showSubmitButton && <form.SubmitButton />}
            </form.AppForm>
            <StepButton onClick={handlePreviousStep} disabled={disablePreviousButton} text="Previous" />
            <StepButton onClick={handleNextStep} disabled={disableNextButton} text="Next" />
        </div>
    )
}