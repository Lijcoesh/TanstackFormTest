import { useState } from "react";
import StepButton from "./formComponents/StepButton";
import { RegisterFormInStepsSteps } from "./RegisterFormInStepsSteps";

export default function RegisterFormInStepsV3() {
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
                <h4>Form Features:</h4>
                <ul>
                    <li>Using TanStack Form</li>
                    <li>with seperate components for fields</li>
                    <li>Using a reusable component for password fields</li>
                    <li>Using a reusable component for select fields</li>
                </ul>
                <h4>Changes since last version:</h4>
                <ul>
                    <li>Seperated logic and UI into different components</li>
                </ul>
            </div>
            <RegisterFormInStepsSteps currentStep={currentStep} />
            <StepButton onClick={handlePreviousStep} disabled={disablePreviousButton} text="Previous" />
            <StepButton onClick={handleNextStep} disabled={disableNextButton} text="Next" />
        </div>
    )
}