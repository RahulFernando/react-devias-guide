import PropTypes from "prop-types";

// mui
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
