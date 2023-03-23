import { Stack, Button, IconButton, SvgIcon } from "@mui/material";
import usePreview from "src/hooks/usePreview";

import CodeIcon from "@untitled-ui/icons-react/build/esm/Code02";
import LaptopIcon from "@untitled-ui/icons-react/build/esm/Laptop01";

import Form from "./Form";
import Code from "./Code";

const Simple = () => {
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
      {isPreview && <Form />}
      {!isPreview && <Code />}
    </>
  );
};

export default Simple;
