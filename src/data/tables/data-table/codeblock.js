export const container = `import { memo } from "react";
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
`;

export const toolbar = `import PropTypes from "prop-types";

import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { memo } from "react";

const ToolBar = memo(({ isColumn, isFilter, isExport }) => (
  <GridToolbarContainer>
    {isColumn && <GridToolbarColumnsButton />}
    {isFilter && <GridToolbarFilterButton />}
    {isExport && <GridToolbarExport />}
  </GridToolbarContainer>
));

ToolBar.propTypes = {
  isColumn: PropTypes.bool,
  isFilter: PropTypes.bool,
  isExport: PropTypes.bool,
};

ToolBar.defaultProps = {
  isColumn: true,
  isFilter: true,
  isExport: true,
};

export default ToolBar;
`;

export const data = `import { faker } from "@faker-js/faker";

import { Stack, Avatar, Typography, IconButton, SvgIcon } from "@mui/material";

import CodeIcon from "@untitled-ui/icons-react/build/esm/Code02";
import LaptopIcon from "@untitled-ui/icons-react/build/esm/Laptop01";
import Edit02Icon from "@untitled-ui/icons-react/build/esm/Edit02";

import DataTableContainer from "./DataTableContainer";

const COLUMNS = [
  {
    field: "fullName",
    headerName: "Full Name",
    flex: 1,
    renderCell: (params) => (
      <Stack alignItems="center" direction="row" spacing={1}>
        <Avatar
          src={params.row.src}
          sx={{
            height: 42,
            width: 42,
          }}
        />
        <div>
          <Typography variant="subtitle2">{params.row.fullName}</Typography>
        </div>
      </Stack>
    ),
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
  },
  {
    field: "jobTitle",
    headerName: "Job Title",
    flex: 1,
  },
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

const DataTable = () => {
  const columns = [
    ...COLUMNS,
    {
      field: "actions",
      headerName: "Actions",
      renderCell: () => (
        <IconButton>
          <SvgIcon>
            <Edit02Icon />
          </SvgIcon>
        </IconButton>
      ),
    },
  ];

  return (
    <DataTableContainer title="Employees" columns={columns} rows={DATA} />
  );
};

export default DataTable;
`;
