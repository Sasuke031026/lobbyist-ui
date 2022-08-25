import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import LoadingScreen from 'react-loading-screen';
import { useThemeMode } from "./common/themeContext";
import { getTheme } from "./common";
import { AppRoutes } from "./routes";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { darkMode } = useThemeMode();
  let theme = React.useMemo(() => {
    return getTheme(darkMode);
  }, [darkMode]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LoadingScreen loading={loading} bgColor="#282931" spinnerColor="#3a78ff">
        <CssBaseline />
        <AppRoutes />
      </LoadingScreen>
    </ThemeProvider>
  );
};

export default App;
