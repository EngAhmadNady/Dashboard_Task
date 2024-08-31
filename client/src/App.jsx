import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { themeSettings } from "./theme";
import Layout from "./scenes/Layout";
import Transactions from "./scenes/Transactions";
import Overview from "./scenes/Overview";
import Daily from "./scenes/Daily";
import Breakdown from "./scenes/Breakdown";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Navigate to="/transactions" replace />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/breakdown" element={<Breakdown />} />
    </Route>
  )
);

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
