import generateUniqueKey from "src/utils/generateUniqueKey";
import { INPUT_TYPES } from "src/config";

export const GENERAL_DETAILS = [
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

export const ADDRESS_DETAILS = [
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
