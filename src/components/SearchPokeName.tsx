import React from "react";
import { Button, Input } from "@mantine/core";
import { useSearchPokeNameContext } from "../contexts/SearchPokeNameContext";

const SearchPokeName = () => {
  const { searchPokeName, setSearchPokeName } = useSearchPokeNameContext();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchPokeName(event.target.value);

  return (
    <Input
      style={{ marginBottom: 7 }}
      placeholder="Type here.."
      rightSection={<Button>Search</Button>}
      rightSectionWidth={-1}
      value={searchPokeName}
      onChange={handleSearch}
    />
  );
};

export default SearchPokeName;
