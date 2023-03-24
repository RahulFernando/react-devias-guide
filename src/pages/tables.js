import { useState } from "react";

import { Box, Container, Tab, Tabs, Stack, Divider } from "@mui/material";

import { Seo } from "src/components/seo";
import SimpleTable from "./tables/simple-table";
import DataTable from "./tables/data-table";

import { neutral } from "src/theme/colors";

const tables = ["Simple Table", "Data Table"];

const Page = () => {
  const [current, setCurrent] = useState(0);

  const tabChangeHandler = (e, tab) => setCurrent(tab);

  return (
    <>
      <Seo title="Tables" />
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
                {tables.map((form, index) => (
                  <Tab key={index} label={form} value={index} />
                ))}
              </Tabs>
              <Divider sx={{ borderColor: "#dfe1e5" }} />
            </div>
            {current === 0 && <SimpleTable />}
            {current === 1 && <DataTable />}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Page;
