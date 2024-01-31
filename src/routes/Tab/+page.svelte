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

<div class="navbar" id="menu">
    <a data-sveltekit-reload href="/"><b>Domů</b></a>    
    <a data-sveltekit-reload href="/Tab">Tabulka</a>
    <a data-sveltekit-reload href="/Had">Had</a>
</div> 

<div class="index">
<h2>Mé výtvory Tab</h2>


</div>

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

    .index{
        text-align: center;
        font-size : 2em;
        display: block;
        margin: 20px 10px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    }


    .navbar {
  overflow: hidden;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 25px;
  text-decoration: none;
  font-size: 2.5em;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color: #525252;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

.navbar a.active {
  background-color: #3B3B3B;
  color: white;
 
}

.navbar .icon {
  display: none;
}

@media screen and (max-width: 820px) {
  .navbar a:not(:first-child) {display: none;}
  .navbar a.icon {
    float: left;
    display: block;
  }
}

@media screen and (max-width: 820px) {
  .navbar.responsive {position: relative;}
  .navbar.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
    
  }
  .navbar.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>