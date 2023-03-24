import { memo } from "react";
import PropTypes from "prop-types";

// mui
import { Box, Card, CardHeader, Divider } from "@mui/material";
import { DataGrid, GridColumnHeaders, GridRow } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

// components
import ToolBar from "./ToolBar";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  "& .MuiDataGrid-withBorderColor": {
    borderColor: theme.palette.grey[200],
  },
  "& .MuiDataGrid-columnHeaders": {
    background: theme.palette.grey[50],
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    borderBottom: "none",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: "rgb(47, 55, 70)",
  },
}));

const MemoizedRow = memo(GridRow);
const MemoizedColumns = memo(GridColumnHeaders);

const DataTableContainer = ({
  title,
  columns,
  rows,
  isColumn,
  isFilter,
  isExport,
  onRowClick,
}) => (
  <Card>
    <CardHeader title={title} />
    <Divider />
    <Box>
      <StyledDataGrid
        autoHeight
        rowHeight={70}
        columns={columns}
        rows={rows}
        slots={{
          row: MemoizedRow,
          columnHeaders: MemoizedColumns,
          toolbar: ToolBar,
        }}
        slotProps={{ toolbar: { isColumn, isFilter, isExport } }}
        pageSizeOptions={[10, 25, 50]}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        onRowClick={onRowClick}
      />
    </Box>
  </Card>
);

DataTableContainer.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  isColumn: PropTypes.bool,
  isFilter: PropTypes.bool,
  isExport: PropTypes.bool,
  onRowClick: PropTypes.func,
};

DataTableContainer.defaultProps = {
  rows: [],
  isColumn: true,
  isFilter: true,
  isExport: true,
};

export default DataTableContainer;
