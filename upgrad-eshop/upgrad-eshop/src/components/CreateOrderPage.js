import React from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';
import { createOrder } from '../common/api'; // Import the API function for creating an order
import './CreateOrderPage.css';
const CreateOrderPage = () => {
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      if (activeStep === 2) {
        // Create the order using the API endpoint when the user confirms the order
        createOrder()
          .then(response => {
            // Handle the successful order creation and display a confirmation message
          })
          .catch(error => {
            // Handle any error that occurs during order creation
          });
      }
    };
  
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
  
    const steps = ['Step 1', 'Step 2', 'Step 3'];
  
    const getStepContent = step => {
      switch (step) {
        case 0:
          return 'Step 1 content';
        case 1:
          return 'Step 2 content';
        case 2:
          return 'Step 3 content';
        default:
          return 'Unknown step';
      }
    };
  
    return (
      <div className="create-order-page-root">
        <Stepper activeStep={activeStep} className="create-order-page-stepper">
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="create-order-page-content">
          <Typography className="create-order-page-step-content">{getStepContent(activeStep)}</Typography>
          <div className="create-order-page-actions">
            {activeStep !== 0 && (
              <Button onClick={handleBack} className="create-order-page-back-button">
                Back
              </Button>
            )}
            <Button variant="contained" color="primary" onClick={handleNext} className="create-order-page-next-button">
              {activeStep === steps.length - 1 ? 'Confirm Order' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreateOrderPage;
  