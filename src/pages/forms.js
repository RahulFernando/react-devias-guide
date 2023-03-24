import { useState } from "react";

import { Box, Container, Tab, Tabs, Stack, Divider } from "@mui/material";

import { Seo } from "src/components/seo";
import Simple from "./forms/simple";
import Stepper from "./forms/stepper";

import { neutral } from "src/theme/colors";

const forms = [
  {
    title: "Simple Form",
  },
  {
    title: "Form with Stepper",
  },
];

const Page = () => {
  const [current, setCurrent] = useState(0);

  const tabChangeHandler = (e, tab) => setCurrent(tab);

  return (
    <>
      <Seo title="Forms" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          bgcolor: neutral[50],
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4}>
            <div>
              <Tabs
                indicatorColor="primary"
                scrollButtons="auto"
                sx={{ px: 3 }}
                textColor="primary"
                variant="scrollable"
                value={current}
                onChange={tabChangeHandler}
              >
                {forms.map((form, index) => (
                  <Tab key={index} label={form.title} value={index} />
                ))}
              </Tabs>
              <Divider sx={{ borderColor: "#dfe1e5" }} />
            </div>
            {current === 0 && <Simple />}
            {current === 1 && <Stepper />}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Page;
