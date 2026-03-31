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
            <div>
                <h2>Form Features:</h2>
                <ul>
                    <li>In steps</li>
                    <li>Using TanStack Form</li>
                    <li>With separate components</li>
                    <li>Using a reusable component for password fields</li>
                </ul>
                <h3>Changes since last version:</h3>
                <ul>
                    <li>Made code much more readable and maintainable by separating form logic and UI into different components</li>
                </ul>
            </div>
            <RegisterFormInStepsSteps currentStep={currentStep} showSubmitButton={currentStep === 2} />
            <StepButton onClick={handlePreviousStep} disabled={disablePreviousButton} text="Previous" />
            <StepButton onClick={handleNextStep} disabled={disableNextButton} text="Next" />
        </div>
    )
}