import ArrowDownIcon from "@untitled-ui/icons-react/build/esm/ArrowDown";
import {
  Box,
  Card,
  Container,
  Divider,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { RouterLink } from "src/components/router-link";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { paths } from "src/paths";
import { neutral } from "src/theme/colors";

const getSections = (paletteMode) => [
  {
    title: "Forms",
    items: [
      {
        title: "Forms",
        subtitle: "2 components",
        image: `/assets/components/forms-${paletteMode}.png`,
        path: paths.forms,
      },
    ],
  },
  {
    title: "Data Display",
    items: [
      {
        title: "Tables",
        subtitle: "2 components",
        image: `/assets/components/tables-${paletteMode}.png`,
        path: paths.dataDisplay.tables,
      },
    ],
  },
];

const Page = () => {
  const theme = useTheme();
  const sections = getSections(theme.palette.mode);

  usePageView();

  return (
    <>
      <Seo title="Components" />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
          py: "120px",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1}>
            <Typography variant="h1">Browse components</Typography>
            <Typography color="text.secondary" variant="body1">
              Browse through individual components
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          bgcolor: neutral[50],
        }}
      >
        <Container maxWidth="lg">
          <Stack divider={<Divider />} spacing={4}>
            {sections.map((section) => (
              <Grid key={section.title} container spacing={4}>
                <Grid xs={12} lg={3}>
                  <Typography sx={{ fontWeight: 600 }} variant="h5">
                    {section.title}
                  </Typography>
                </Grid>
                <Grid xs={12} lg={9}>
                  <Grid container spacing={4}>
                    {section.items.map((item) => (
                      <Grid key={item.title} xs={12} sm={6} md={4}>
                        <Card
                          component={RouterLink}
                          href={item.path}
                          sx={{
                            display: "block",
                            textDecoration: "none",
                            gridColumn: {
                              xs: "span 3",
                              sm: "span 1",
                            },
                          }}
                          variant="outlined"
                          {...(item.newTab && {
                            component: "a",
                            target: "_blank",
                          })}
                        >
                          <Box sx={{ p: 2 }}>
                            <Box
                              sx={{
                                position: "relative",
                                pt: "calc(300 / 500 * 100%)",
                                "& img": {
                                  height: "auto",
                                  position: "absolute",
                                  top: 0,
                                  width: "100%",
                                },
                              }}
                            >
                              <img src={item.image} />
                            </Box>
                            <Box
                              sx={{
                                alignItems: "flex-end",
                                display: "flex",
                                mt: 2,
                              }}
                            >
                              <Typography variant="subtitle2">
                                {item.title}
                              </Typography>
                              {item.newTab && (
                                <SvgIcon color="action" sx={{ ml: 1.5 }}>
                                  <ArrowDownIcon />
                                </SvgIcon>
                              )}
                            </Box>
                            <Typography color="text.secondary" variant="body2">
                              {item.subtitle}
                            </Typography>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Page;
