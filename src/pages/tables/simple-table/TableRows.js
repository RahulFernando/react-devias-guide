import PropTypes from "prop-types";

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
