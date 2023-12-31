import { Box, Stack, ThemeProvider} from "@mui/material";
import DefaultLayout from "./Layout/DefaultLayout";
import MenuTab from "./components/MenuTab";
import SwiperAutoSwitch from "./components/AppSwipper";
import "keen-slider/keen-slider.min.css";
import theme from "./utils/theme/Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <DefaultLayout>
       <Stack direction={'column'} spacing={1} >
        <MenuTab  />
       <SwiperAutoSwitch />
       </Stack>
      
      </DefaultLayout>
    </div>
    </ThemeProvider>
  );
}

export default App;
