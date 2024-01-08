import { ThemeProvider} from "@mui/material";
import theme from "./utils/theme/Theme";
import "keen-slider/keen-slider.min.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <HomePage />
    </div>
    </ThemeProvider>
  );
}

export default App;
