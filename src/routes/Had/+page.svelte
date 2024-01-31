<script>
import Canvas from '../../lib/components/Canvas.svelte';


</script>

<div class="navbar" id="menu">
    <a data-sveltekit-reload href="/"><b>Domů</b></a>    
    <a data-sveltekit-reload href="/Tab">Tabulka</a>
    <a data-sveltekit-reload href="/Had">Had</a>
</div> 

<div class="index">
<h2>Mé výtvory Had</h2>


</div>
<Canvas/>


<style>
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