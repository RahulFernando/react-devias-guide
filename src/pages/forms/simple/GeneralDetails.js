import PropTypes from "prop-types";

import { Card, CardContent, CardHeader, Divider, Grid } from "@mui/material";

import generateInputFields from "src/helpers/generateInputFields";

const GeneralDetails = ({
  isHeader = true,
  generalDetails = [],
  formik,
  onDateChange,
}) => (
  <Card>
    {isHeader && <CardHeader title="General Details" />}
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

export default GeneralDetails;
