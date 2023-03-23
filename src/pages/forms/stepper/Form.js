import { useState } from "react";
import { useFormik } from "formik";

import { Stack, Step, StepLabel, Stepper, Button } from "@mui/material";

import GeneralDetails from "../simple/GeneralDetails";
import AddressDetails from "../simple/AddressDetails";

import generateUniqueKey from "src/utils/generateUniqueKey";
import { INPUT_TYPES } from "src/config";
import { ADDRESS_DETAILS, GENERAL_DETAILS } from "../constants";

const STEPS = [
  {
    label: "General Details",
    step: 0,
  },
  {
    label: "Address Details",
    step: 1,
  },
];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      dateOfBirth: "",
      nic: "",
    },
    onSubmit: (values) => console.log(values),
  });

  const nextHandler = () => setActiveStep(activeStep + 1);

  return (
    <>
      <Stepper activeStep={activeStep}>
        {STEPS.map((step) => (
          <Step key={step.step}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4} mt={3}>
          {activeStep === 0 && (
            <GeneralDetails
              isHeader={false}
              generalDetails={GENERAL_DETAILS}
              formik={formik}
            />
          )}
          {activeStep === 1 && (
            <AddressDetails
              isHeader={false}
              addressDetails={ADDRESS_DETAILS}
              formik={formik}
            />
          )}

          <Stack
            alignItems="center"
            direction="row"
            justifyContent="flex-end"
            spacing={1}
          >
            {activeStep === STEPS.length - 1 && (
              <Button type="submit" variant="contained">
                Submit
              </Button>
            )}
            {activeStep !== STEPS.length - 1 && (
              <Button type="button" variant="contained" onClick={nextHandler}>
                Next
              </Button>
            )}
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default Form;
