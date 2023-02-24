import { Table } from "@mantine/core";
import { useAtomValue } from "jotai";
import { IPokemoonData } from "../types";
import { SearchPokeNameAtom } from "./SearchPokeName";

const PokeList = () => {
  const searchPokeName = useAtomValue(SearchPokeNameAtom);

  const pokeNameFilterCallback = (poke: IPokemoonData) =>
    poke.name.toLowerCase().includes(searchPokeName);

  const pokes = [
    { name: "Abc", height: 63, weight: 3.2, types: ["def", "ghi"] },
    { name: "Def", height: 36, weight: 2.3, types: ["xyz", "abc"] },
  ];

  const ths = (
    <tr>
      <th>Name</th>
      <th>Height</th>
      <th>Weight</th>
      <th>Types</th>
    </tr>
  );

  const rows = pokes.filter(pokeNameFilterCallback).map((poke, index) => (
    <tr key={index}>
      <th>{poke.name}</th>
      <th>{poke.height}</th>
      <th>{poke.weight}</th>
      <th>{poke.types.map((type) => type + ",")}</th>
    </tr>
  ));

  return (
    <Table>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default PokeList;
