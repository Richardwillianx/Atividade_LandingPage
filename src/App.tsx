import React, { useState } from "react";
import Router from "./Routers";
import GlobalStyles from "./config/styles/GlobalStyles";
import { Button, ThemeProvider } from "@mui/material";
import { dark, light } from "./config/styles/themes/Default";

function App() {
  const [theme, setTheme] = useState(dark);

  function changeTheme() {
    if (theme !== dark) {
      setTheme(dark);
      return;
    }

    setTheme(light);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={changeTheme} sx={{ position: "absolute" }}>
          Change Theme
        </Button>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
