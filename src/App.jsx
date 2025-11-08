import { useState } from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import SettingsProvider from "./contexts/settingsContexts.jsx";
import ThemeSettings from "./components/settings/index";
import ThemeProvider from "./theme/index.jsx";
import { store } from "./redux/store.js";
import { Provider as ReduxProvider } from "react-redux";
function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <SettingsProvider>
          <ThemeProvider>
            <ThemeSettings>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </ThemeSettings>
          </ThemeProvider>
        </SettingsProvider>
      </ReduxProvider>
    </>
  );
}

export default App;
