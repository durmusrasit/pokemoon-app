import React, { JSXElementConstructor } from "react";

type SearchPokeNameType = {
  searchPokeName: string;
  setSearchPokeName: React.Dispatch<React.SetStateAction<string>>;
};

const defaultValue = {
  searchPokeName: "",
  setSearchPokeName: () => {},
};

const SearchPokeNameContext =
  React.createContext<SearchPokeNameType>(defaultValue);

function SearchPokeNameContextProvider({
  children,
}: {
  children:
    | React.ReactElement<any, string | JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal;
}) {
  const [searchPokeName, setSearchPokeName] = React.useState<string>("");

  const searchPokeNameContextValue = React.useMemo(
    () => ({ searchPokeName, setSearchPokeName }),
    [searchPokeName]
  );

  return (
    <SearchPokeNameContext.Provider value={searchPokeNameContextValue}>
      {children}
    </SearchPokeNameContext.Provider>
  );
}

function useSearchPokeNameContext() {
  const searchPokeNameContext = React.useContext(SearchPokeNameContext);

  if (searchPokeNameContext === undefined) {
    throw new Error(
      "useSearchPokeNameContext must be used within SearchPokeNameContextProvider"
    );
  }

  return searchPokeNameContext;
}

export { SearchPokeNameContextProvider, useSearchPokeNameContext };
