export const container = `import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import Scrollbar from "src/components/Scrollbar";

const TableContainer = ({ title, columns, action, children }) => {
  return (
    <Card>
      <CardHeader action={action} title={title} />

      <Scrollbar>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.title} {...column.props}>
                  {column.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};

TableContainer.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
  action: PropTypes.node,
  children: PropTypes.node,
};

TableContainer.defaultProps = {
  columns: [],
};

export default TableContainer;
`;

export const rows = `import PropTypes from "prop-types";

import {
  Avatar,
  IconButton,
  Stack,
  SvgIcon,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import Edit02Icon from "@untitled-ui/icons-react/build/esm/Edit02";

const TableRows = ({ rows }) => {
  return (
    <>
      {rows.map((data) => (
        <TableRow key={data.id}>
          <TableCell>
            <Stack alignItems="center" direction="row" spacing={1}>
              <Avatar
                src={data.src}
                sx={{
                  height: 42,
                  width: 42,
                }}
              ></Avatar>
              <Typography variant="subtitle2">{data.fullName}</Typography>
            </Stack>
          </TableCell>
          <TableCell>{data.phone}</TableCell>
          <TableCell>{data.jobTitle}</TableCell>
          <TableCell align="right">
            <IconButton>
              <SvgIcon>
                <Edit02Icon />
              </SvgIcon>
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

TableRows.propTypes = {
  rows: PropTypes.array,
};

TableRows.defaultProps = {
  rows: [],
};

export default TableRows;
`;

export const simpleTable = `import { faker } from "@faker-js/faker";

import { Stack, Button, IconButton, SvgIcon } from "@mui/material";

import CodeIcon from "@untitled-ui/icons-react/build/esm/Code02";
import LaptopIcon from "@untitled-ui/icons-react/build/esm/Laptop01";

import usePreview from "src/hooks/usePreview";

import TableContainer from "./TableContainer";
import TableRows from "./TableRows";

const COLUMNS = [
  { title: "Full name" },
  { title: "Phone" },
  { title: "Job title" },
  { title: "Actions", props: { align: "right" } },
];

const DATA = [
  {
    id: faker.datatype.uuid(),
    fullName: faker.name.fullName(),
    phone: faker.phone.number(),
    jobTitle: faker.name.jobTitle(),
    src: "/assets/avatars/avatar-carson-darrin.png",
  },
  {
    id: faker.datatype.uuid(),
    fullName: faker.name.fullName(),
    phone: faker.phone.number(),
    jobTitle: faker.name.jobTitle(),
    src: "/assets/avatars/avatar-fran-perez.png",
  },
  {
    id: faker.datatype.uuid(),
    fullName: faker.name.fullName(),
    phone: faker.phone.number(),
    jobTitle: faker.name.jobTitle(),
    src: "/assets/avatars/avatar-jie-yan-song.png",
  },
  {
    id: faker.datatype.uuid(),
    fullName: faker.name.fullName(),
    phone: faker.phone.number(),
    jobTitle: faker.name.jobTitle(),
    src: "/assets/avatars/avatar-anika-visser.png",
  },
];

const SimpleTable = () => {
  const [isPreview, onToggle] = usePreview();

  return (
    <TableContainer title="Employees" columns={COLUMNS}>
        <TableRows rows={DATA} />
    </TableContainer>
  );
};

export default SimpleTable;
`;
