import { useFormik } from "formik";

import { Stack, Button } from "@mui/material";

import GeneralDetails from "./GeneralDetails";
import AddressDetails from "./AddressDetails";

import { ADDRESS_DETAILS, GENERAL_DETAILS } from "../constants";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      dateOfBirth: "",
      nic: "",
    },
    onSubmit: (values) => console.log(values),
  });

  const dateChangeHandler = (newDate, name) =>
    formik.setFieldValue(`${name}`, newDate);

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Stack spacing={4}>
        <GeneralDetails
          generalDetails={GENERAL_DETAILS}
          formik={formik}
          onDateChange={dateChangeHandler}
        />
        <AddressDetails addressDetails={ADDRESS_DETAILS} formik={formik} />

        <Stack
          alignItems="center"
          direction="row"
          justifyContent="flex-end"
          spacing={1}
        >
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default Form;
