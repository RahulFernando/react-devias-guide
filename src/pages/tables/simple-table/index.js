import { faker } from "@faker-js/faker";

import { Stack, Button, IconButton, SvgIcon } from "@mui/material";

import CodeIcon from "@untitled-ui/icons-react/build/esm/Code02";
import LaptopIcon from "@untitled-ui/icons-react/build/esm/Laptop01";

import usePreview from "src/hooks/usePreview";

import TableContainer from "./TableContainer";
import TableRows from "./TableRows";
import Code from "./Code";

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
    <>
      <Stack alignItems="center" direction="row" justifyContent="flex-end">
        <IconButton onClick={onToggle}>
          <SvgIcon color="secondary">
            {isPreview && <CodeIcon />} {!isPreview && <LaptopIcon />}
          </SvgIcon>
        </IconButton>
      </Stack>
      {isPreview && (
        <TableContainer title="Employees" columns={COLUMNS}>
          <TableRows rows={DATA} />
        </TableContainer>
      )}
      {!isPreview && <Code />}
    </>
  );
};

export default SimpleTable;
