import AppProvider from "./context/AppContext";
import Wheather from "./components/weather/Weather";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";

function App() {
  const context = useContext(AppContext);
  return (
    <div>
      <AppProvider>
        <Wheather />
      </AppProvider>
    </div>
  );
}

export default App;
