export const load = async ({ fetch }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
  );
  const data = await response.json();
  //   const rows = data.results.map(({ name, url }) => ({ name, url }));
  //   return rows;
  return data;
};
