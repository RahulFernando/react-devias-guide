import { useState } from "react";
import { useFormik } from "formik";

import {
  Stack,
  Step,
  StepLabel,
  Stepper,
  Button,
  IconButton,
  SvgIcon,
} from "@mui/material";

import CodeIcon from "@untitled-ui/icons-react/build/esm/Code02";
import LaptopIcon from "@untitled-ui/icons-react/build/esm/Laptop01";

import usePreview from "src/hooks/usePreview";

import Form from "./Form";
import Code from "./Code";

const FormWithStepper = () => {
  const [isPreview, onToggle] = usePreview();

  return (
    <Stack spacing={2}>
      <Stack alignItems="center" direction="row" justifyContent="flex-end">
        <IconButton onClick={onToggle}>
          <SvgIcon color="secondary">
            {isPreview && <CodeIcon />} {!isPreview && <LaptopIcon />}
          </SvgIcon>
        </IconButton>
      </Stack>

      {isPreview && <Form />}
      {!isPreview && <Code />}
    </Stack>
  );
};

export default FormWithStepper;
