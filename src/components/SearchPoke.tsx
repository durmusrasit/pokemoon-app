import React, { useState } from "react";
import { Button, Input } from "@mantine/core";

const SearchPoke = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(event.target.value);

  return (
    <Input
      style={{ marginBottom: 7 }}
      placeholder="Type here.."
      rightSection={<Button>Search</Button>}
      rightSectionWidth={-1}
      value={searchText}
      onChange={handleSearchText}
    />
  );
};

export default SearchPoke;
