<script>
	import Table from './Table.svelte';
	

	const headers = [
	  { key: "name", value: "Pokemon Name" },
	  { key: "type", value: "Type" },
	  { key: "level", value: "Level" },
	  { key: "ability", value: "Ability" },
	];
  
	const rows = [
	  {
		id: "pikachu",
		name: "Pikachu",
		type: "Electric",
		level: 25,
		ability: "Static",
	  },
	  {
		id: "charizard",
		name: "Charizard",
		type: "Fire/Flying",
		level: 50,
		ability: "Blaze",
	  },
	  {
		id: "bulbasaur",
		name: "Bulbasaur",
		type: "Grass/Poison",
		level: 15,
		ability: "Overgrow",
	  },
	  {
		id: "squirtle",
		name: "Squirtle",
		type: "Water",
		level: 20,
		ability: "Torrent",
	  },
	  {
		id: "jigglypuff",
		name: "Jigglypuff",
		type: "Normal/Fairy",
		level: 18,
		ability: "Cute Charm",
	  },
	  {
		id: "eevee",
		name: "Eevee",
		type: "Normal",
		level: 30,
		ability: "Adaptability",
	  },
	];
</script>

<svelte:head>
	<title>WEB</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>



<section>

		<Table rows={rows} headers={headers}>
			<!-- 1 - tady říkám, že chci změnit obsah v místě (slotu) cell (buňka) -->
			<!-- místo `span` se používá spíš <svelte:fragment>, to je wrapper který nevytvoří v DOM žádný element (ani span, ani div, nic), ale dal jsem span ať tě to zbytečně neplete -->
			<span slot="cell" let:cell>
				data - {cell}
				
		
			</span>
		</Table>





</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.title {
		display: block;
		position: relative;
		width: 100%;
		font-size : 2em;
		height: 0;
	
	}

</style>
