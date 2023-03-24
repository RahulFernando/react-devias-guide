import { faker } from "@faker-js/faker";

import { Stack, Avatar, Typography, IconButton, SvgIcon } from "@mui/material";

import CodeIcon from "@untitled-ui/icons-react/build/esm/Code02";
import LaptopIcon from "@untitled-ui/icons-react/build/esm/Laptop01";
import Edit02Icon from "@untitled-ui/icons-react/build/esm/Edit02";

import usePreview from "src/hooks/usePreview";

import DataTableContainer from "./DataTableContainer";
import Code from "./Code";

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
  const [isPreview, onToggle] = usePreview();

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
    <>
      <Stack alignItems="center" direction="row" justifyContent="flex-end">
        <IconButton onClick={onToggle}>
          <SvgIcon color="secondary">
            {isPreview && <CodeIcon />} {!isPreview && <LaptopIcon />}
          </SvgIcon>
        </IconButton>
      </Stack>
      {isPreview && (
        <DataTableContainer title="Employees" columns={columns} rows={DATA} />
      )}
      {!isPreview && <Code />}
    </>
  );
};

export default DataTable;
