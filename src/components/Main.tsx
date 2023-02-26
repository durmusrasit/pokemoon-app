import { Container, Paper } from "@mantine/core";
import PokeList from "./PokeList";
import SearchPokeName from "./SearchPokeName";
import Header from "./ui/Header";

const Main = () => {
  return (
    <Container py={200}>
      <Paper sx={{ padding: "8px" }} shadow="xl">
        <Header />
        <SearchPokeName />
        <PokeList />
      </Paper>
    </Container>
  );
};

export default Main;
