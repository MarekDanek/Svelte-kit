<script>
  import Canvas from "../../lib/components/Canvas.svelte";
</script>

<div class="navbar" id="menu">
  <a data-sveltekit-reload href="/"><b>Domů</b></a>
  <a data-sveltekit-reload href="/Tab">Tabulka </a>
  <a data-sveltekit-reload href="/Had">Had </a>
</div>

<div class="index">
  <h2>SvelteKit</h2>
</div>
<div class="cs">
  <Canvas />
</div>

<style>
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
