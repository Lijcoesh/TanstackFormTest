import { useState } from "react";
import StepButton from "./formComponents/StepButton";
import { RegisterFormInStepsSteps } from "./RegisterFormInStepsSteps";

export default function RegisterFormInStepsV2() {
    const [currentStep, setCurrentStep] = useState(0);
    const [disablePreviousButton, setDisablePreviousButton] = useState(false)
    const [disableNextButton, setDisableNextButton] = useState(false)

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
            <p> form in steps created using TanStack Form with separate components, using a reusable component for password fields </p>
            <RegisterFormInStepsSteps currentStep={currentStep} showSubmitButton={currentStep === 2} />
            <StepButton onClick={handlePreviousStep} disabled={disablePreviousButton} text="Previous" />
            <StepButton onClick={handleNextStep} disabled={disableNextButton} text="Next" />
        </div>
    )
}