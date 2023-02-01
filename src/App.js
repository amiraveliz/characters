import Home from "./components/home";
import TopBar from "./components/top-bar";
import { CustomThemeProvider } from "./contexts/custom-theme-context";
import Theme from "./Theme";

const App = () => {
  return (
    <CustomThemeProvider>
      <Theme>
        <TopBar />
        <Home />
      </Theme>
    </CustomThemeProvider>
  );
};

export default App;
