// routes
import Router from "./routes/index";
// theme
import ThemeProvider from './theme/index';
// components
import ThemeSettings from './components/settings/index';

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        {" "}
        <Router />{" "}
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;