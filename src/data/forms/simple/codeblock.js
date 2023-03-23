export const form = `import { useFormik } from "formik";

import { Stack, Button } from "@mui/material";

import GeneralDetails from "./GeneralDetails";
import AddressDetails from "./AddressDetails";

import generateUniqueKey from "src/utils/generateUniqueKey";
import { INPUT_TYPES } from "src/config";

const GENERAL_DETAILS = [
  {
    key: generateUniqueKey("f_name"),
    label: "First Name",
    name: "fName",
    required: true,
    type: INPUT_TYPES.TEXT,
    xs: 12,
    md: 6,
  },
  {
    key: generateUniqueKey("l_name"),
    label: "Last Name",
    name: "lName",
    required: true,
    type: INPUT_TYPES.TEXT,
    xs: 12,
    md: 6,
  },
  {
    key: generateUniqueKey("data_of_birth"),
    label: "Date of Birth",
    name: "dateOfBirth",
    required: true,
    type: INPUT_TYPES.DATE,
    xs: 12,
    md: 6,
  },
  {
    key: generateUniqueKey("nic"),
    label: "National Identity",
    name: "nic",
    required: true,
    type: INPUT_TYPES.TEXT,
    xs: 12,
    md: 6,
  },
];

const ADDRESS_DETAILS = [
  {
    key: generateUniqueKey("line_1"),
    label: "Address Line 1",
    name: "line_1",
    type: INPUT_TYPES.TEXT,
    xs: 12,
    md: 4,
  },
  {
    key: generateUniqueKey("line_2"),
    label: "Address Line 2",
    name: "line_2",
    type: INPUT_TYPES.TEXT,
    xs: 12,
    md: 4,
  },
  {
    key: generateUniqueKey("line_3"),
    label: "Address Line 3",
    name: "line_3",
    type: INPUT_TYPES.TEXT,
    xs: 12,
    md: 4,
  },
  {
    key: generateUniqueKey("country"),
    label: "Country",
    name: "country",
    required: true,
    type: INPUT_TYPES.SELECT,
    options: [
      { value: "india", label: "India" },
      { value: "sri_lanka", label: "Sri Lanka" },
    ],
    xs: 12,
    md: 6,
  },
  {
    key: generateUniqueKey("city"),
    label: "City",
    name: "city",
    required: true,
    type: INPUT_TYPES.SELECT,
    options: [
      { value: "delhi", label: "Delhi" },
      { value: "kottawa", label: "Kottawa" },
    ],
    xs: 12,
    md: 6,
  },
];

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
    formik.setFieldValue(name, newDate);

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

export default Form;`;

export const general = `import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, Divider, Grid } from "@mui/material";

import generateInputFields from "src/helpers/generateInputFields";

const GeneralDetails = ({ generalDetails = [], formik, onDateChange }) => (
  <Card>
    <CardHeader title="General Details" />
    <Divider />
    <CardContent>
      <Grid container spacing={3}>
        {generalDetails.map((item) => (
          <Grid key={item.key} item xs={item.xs} md={item.md}>
            {generateInputFields(
              item,
              formik,
              undefined,
              undefined,
              onDateChange,
              undefined
            )}
          </Grid>
        ))}
      </Grid>
    </CardContent>
  </Card>
);

GeneralDetails.propTypes = {
  generalDetails: PropTypes.array,
  formik: PropTypes.object,
  onDateChange: PropTypes.func,
};

export default GeneralDetails;`;

export const address = `import PropTypes from "prop-types";

import { Card, CardContent, CardHeader, Divider, Grid } from "@mui/material";

import generateInputFields from "src/helpers/generateInputFields";

const AddressDetails = ({ addressDetails = [], formik }) => (
  <Card>
    <CardHeader title="Address Details" />
    <Divider />
    <CardContent>
      <Grid container spacing={3}>
        {addressDetails.map((item) => (
          <Grid key={item.key} item xs={item.xs} md={item.md}>
            {generateInputFields(item, formik, item?.options)}
          </Grid>
        ))}
      </Grid>
    </CardContent>
  </Card>
);

AddressDetails.propTypes = {
  addressDetails: PropTypes.array,
  formik: PropTypes.object,
};

export default AddressDetails;
`;
