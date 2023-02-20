import {
  Button,
  Center,
  Container,
  Input,
  MantineProvider,
  Paper,
  Text,
} from "@mantine/core";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container py={200}>
        <Paper sx={{ padding: "8px" }} shadow="xl">
          <Center>
            <Text>Search Your Pokemoon</Text>
          </Center>
          <Input
            placeholder="Type here.."
            rightSection={<Button>Search</Button>}
            rightSectionWidth={-1}
          />
        </Paper>
      </Container>
    </MantineProvider>
  );
}

export default App;
