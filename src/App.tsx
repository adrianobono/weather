import AppProvider from "./context/AppContext";
import Wheather from "./components/weather/Weather";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";


const theme = {
  colors: {
    tan: "#fceed1",
    purple: "#7d3cff",
    yellow: "#f2d53c",
    red: "#c80e13",
  },
  imgs: {
    logo: "clima",
  },
  fonts: {
    body: "Arial, Helvetica, sans-serif",
  },
};

function App() {
  const context = useContext(AppContext);
  return (
    <div>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Wheather />
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}

export default App;
