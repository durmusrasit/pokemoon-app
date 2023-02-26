import { MantineProvider } from "@mantine/core";
import Main from "./components/Main";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Main />
    </MantineProvider>
  );
}

export default App;
