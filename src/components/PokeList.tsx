import { Table } from "@mantine/core";

const PokeList = () => {
  const pokes = [
    { name: "Abc", height: 63, weight: 3.2, types: ["def", "ghi"] },
  ];

  const ths = (
    <tr>
      <th>Name</th>
      <th>Height</th>
      <th>Weight</th>
      <th>Types</th>
    </tr>
  );

  const rows = pokes.map((poke, index) => (
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
