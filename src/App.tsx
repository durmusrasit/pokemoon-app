import {
  Button,
  Center,
  Container,
  Input,
  MantineProvider,
  Paper,
  Title,
} from "@mantine/core";
import PokeList from "./components/PokeList";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container py={200}>
        <Paper sx={{ padding: "8px" }} shadow="xl">
          <Center>
            <Title>Search Your Pokemoon</Title>
          </Center>
          <Input
            placeholder="Type here.."
            rightSection={<Button>Search</Button>}
            rightSectionWidth={-1}
          />
          <PokeList />
        </Paper>
      </Container>
    </MantineProvider>
  );
}

export default App;
