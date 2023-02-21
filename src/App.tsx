import {
  Center,
  Container,
  MantineProvider,
  Paper,
  Title,
} from "@mantine/core";
import SearchPoke from "./components/SearchPoke";
import PokeList from "./components/PokeList";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container py={200}>
        <Paper sx={{ padding: "8px" }} shadow="xl">
          <Center>
            <Title style={{ marginBottom: 7 }}>Search Your Pokemoon</Title>
          </Center>
          <SearchPoke />
          <PokeList />
        </Paper>
      </Container>
    </MantineProvider>
  );
}

export default App;
