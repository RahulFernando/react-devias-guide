// mui
import {
  TextField,
  FormControlLabel,
  Switch,
  Typography,
  RadioGroup,
  Radio,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// constants
import { INPUT_TYPES } from "src/config";

/**
 * return input field based on type
 * @param {Object} input
 * @param {Object} formik
 * @param {Array} options
 * @param {Function} onDateChange
 * @returns component
 */
const renderFields = (
  input,
  formik,
  options = [],
  maxDate,
  onDateChange,
  onCheckboxChange
) => {
  if (input.type === INPUT_TYPES.DATE) {
    return (
      <DatePicker
        label={input.label}
        name={input.name}
        value={formik.values[input.name]}
        maxDate={maxDate}
        onChange={(newValue) => onDateChange(newValue, input.name)}
        renderInput={(params) => (
          <TextField
            required={input.required}
            fullWidth
            {...params}
            error={formik.errors[input.name] && formik.touched[input.name]}
            helperText={
              formik.errors[input.name] &&
              formik.touched[input.name] &&
              formik.errors[input.name]
            }
          />
        )}
      />
    );
  }

  if (input.type === INPUT_TYPES.SELECT) {
    return (
      <TextField
        fullWidth
        label={input.label}
        name={input.name}
        onChange={formik.handleChange}
        select
        SelectProps={{ native: true }}
        value={formik.values[input.name]}
        error={formik.errors[input.name] && formik.touched[input.name]}
        helperText={
          formik.errors[input.name] &&
          formik.touched[input.name] &&
          formik.errors[input.name]
        }
      >
        <option value={0} disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    );
  }

  if (input.type === INPUT_TYPES.CHECKBOX) {
    return (
      <FormControlLabel
        label={<Typography variant="subtitle2">{input.label}</Typography>}
        labelPlacement="start"
        control={
          <Switch
            checked={formik.values[input.name]}
            onChange={onCheckboxChange}
            name={input.name}
          />
        }
      />
    );
  }

  if (input.type === INPUT_TYPES.RADIO) {
    return (
      <RadioGroup
        value={formik.values[input.name]}
        onChange={formik.handleChange}
        name={input.name}
        sx={{ flexDirection: "row" }}
      >
        {input.options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={<Radio />}
            label={<Typography variant="body1">{option.label}</Typography>}
            value={option.value}
          ></FormControlLabel>
        ))}
      </RadioGroup>
    );
  }

  return (
    <TextField
      label={input.label}
      name={input.name}
      required={input.required}
      multiline={input.multiline}
      rows={input.rows}
      fullWidth
      value={formik.values[input.name]}
      onChange={formik.handleChange}
      error={formik.errors[input.name] && formik.touched[input.name]}
      helperText={
        formik.errors[input.name] &&
        formik.touched[input.name] &&
        formik.errors[input.name]
      }
    />
  );
};

export default renderFields;
