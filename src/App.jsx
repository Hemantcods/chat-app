import { useState } from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import SettingsProvider from "./contexts/settingsContexts.jsx";
import ThemeSettings from "./components/settings/index";
import ThemeProvider from "./theme/index.jsx";
function App() {

  return (
    <>
       <SettingsProvider>
      <ThemeProvider>
        <ThemeSettings>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeSettings>
      </ThemeProvider>
    </SettingsProvider>
    </>
  );
}

export default App;
