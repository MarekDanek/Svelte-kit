<script>
	import Table from "../../lib/components/Table.svelte";
	import { page } from '$app/stores';
    export let data;
	
	// async function FetchAPI() {
	// 	const response = await fetch(
	// 		`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`,
	// 	);
	// 	const data = await response.json();
	// 	const rows = data.results.map(({ name, url }) => ({ name, url }));
	// 	return rows;
	// }
	
	let rows = $page.data.results;
	const headers = [
		{ key: "name", value: "Jméno" },
		{ key: "url", value: "URL" }
	];

	// FetchAPI().then((data) => (rows = data));

$: console.log($page)
</script>

<div class="navbar" id="menu">
	<a data-sveltekit-reload href="/"><b>Domů</b></a>
	<a data-sveltekit-reload href="/Tab">Tabulka</a>
	<a data-sveltekit-reload href="/Had">Had</a>
</div>

<div class="index">
	<h2>SvelteKit</h2>
</div>
<section>
	<Table {rows} {headers}>
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

	.index {
		opacity: 90%;
		color: white;
		background-color: black;
		text-align: center;
		font-size: 4em;
		display: block;
		margin: 20px 10px;
		font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
			"Lucida Sans", Arial, sans-serif;
	}

	.navbar {
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.navbar a {
		display: block;
		color: #f2f2f2;
		text-align: center;
		padding: 14px 25px;
		text-decoration: none;
		font-size: 2.5em;
		font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
			"Lucida Sans", Arial, sans-serif;
		background-color: #525252;
		width: 40%;
		border: solid black 3px;
	}

	.navbar a:hover {
		background-color: #ddd;
		color: black;
	}

	@media screen and (max-width: 600px) {
		.navbar {
			justify-content: flex-start;
			flex-direction: column;
		}
	}
</style>
