import { useRoutes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RTL } from "./components/rtl";
import { Toaster } from "./components/toaster";
import {
  SettingsConsumer,
  SettingsProvider,
} from "./contexts/settings-context";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { gtmConfig } from "./config";
import { useNprogress } from "./hooks/use-nprogress";
import { routes } from "./routes";
import { createTheme } from "./theme";
// Remove if react-quill is not used
import "react-quill/dist/quill.snow.css";
// Remove if react-draft-wysiwyg is not used
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// Remove if simplebar is not used
import "simplebar-react/dist/simplebar.min.css";
// Remove if mapbox is not used
import "mapbox-gl/dist/mapbox-gl.css";

export const App = () => {
  useNprogress();

  const element = useRoutes(routes);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SettingsProvider>
        <SettingsConsumer>
          {(settings) => {
            // Prevent theme flicker when restoring custom settings from browser storage
            if (!settings.isInitialized) {
              // return null;
            }

            const theme = createTheme({
              colorPreset: settings.colorPreset,
              contrast: settings.contrast,
              direction: settings.direction,
              paletteMode: settings.paletteMode,
              responsiveFontSizes: settings.responsiveFontSizes,
            });

            return (
              <ThemeProvider theme={theme}>
                <Helmet>
                  <meta name="color-scheme" content={settings.paletteMode} />
                  <meta
                    name="theme-color"
                    content={theme.palette.neutral[900]}
                  />
                </Helmet>
                <RTL direction={settings.direction}>
                  <CssBaseline />

                  {element}
                  <Toaster />
                </RTL>
              </ThemeProvider>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </LocalizationProvider>
  );
};
