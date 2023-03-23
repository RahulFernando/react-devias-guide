import PropTypes from "prop-types";

import { Card, CardContent, CardHeader, Divider, Grid } from "@mui/material";

import generateInputFields from "src/helpers/generateInputFields";

const AddressDetails = ({ isHeader = true, addressDetails = [], formik }) => (
  <Card>
    {isHeader && <CardHeader title="Address Details" />}
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
