import { useState } from "react";
import StepButton from "./formComponents/StepButton";
import { RegisterFormInStepsSteps } from "./RegisterFormInStepsSteps";
import { Box, Typography, Button } from "@mui/material";
import ListOfFeatures from "./ListOfFeatures";

export default function RegisterFormInStepsV5() {
    const [currentStep, setCurrentStep] = useState(0);
    const [disablePreviousButton, setDisablePreviousButton] = useState(true)
    const [disableNextButton, setDisableNextButton] = useState(false)
    const [showInlineErrors, setShowInlineErrors] = useState(false)

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

    return(
        <Box sx={{ display: 'flex', gap: 4, maxWidth: 1200, margin: '0 auto' }}>
            <Box sx={{ flex: 1, backgroundColor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <Typography 
                        variant="h1" 
                        sx={{
                            fontWeight: 700,
                            letterSpacing: 0.5,
                            color: 'primary.main',
                        }}
                    >
                        Register
                    </Typography>
                    <Button 
                        variant="outlined" 
                        onClick={() => setShowInlineErrors(!showInlineErrors)}
                        sx={{ textTransform: 'none', fontWeight: 600 }}
                    >
                        {showInlineErrors ? 'Hide Inline Errors' : 'Show Inline Errors'}
                    </Button>
                </Box>
                <RegisterFormInStepsSteps currentStep={currentStep} showInlineErrors={showInlineErrors} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <StepButton onClick={handlePreviousStep} disabled={disablePreviousButton} text="Previous" />
                    <StepButton onClick={handleNextStep} disabled={disableNextButton} text="Next" />
                </Box>
            </Box>
            <Box sx={{ flex: 1, backgroundColor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
                <ListOfFeatures />
            </Box>
        </Box>
    )
}