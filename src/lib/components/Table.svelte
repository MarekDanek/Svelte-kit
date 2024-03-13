<script>
    import { onMount } from 'svelte';
      import Bunka from './Bunka.svelte';
  
    export let headers;
    export let rows;

  
    let minLevel;
    let maxLevel;
  
  
    let visibleRows = [];

  
    onMount(() => {
      minLevel = Math.min(...rows.map(row => row.level));
      maxLevel = Math.max(...rows.map(row => row.level));
      visibleRows = rows.slice();
    });
  
  </script>
  
  <style>
    table {
      border: solid black 2px;
      border-collapse: collapse;
      width: 100%;
    }
    tr{
      border: solid black 1px;
    }
  
    th {
      border: solid black 1px;
      padding: 8px;
      text-align: left;
    }
  
    th {
      background-color: grey;
      cursor: pointer;
    }
  </style>
  
  
  
  
  <table>
    <thead>
      <tr>
        {#each headers as { key, value }}
          <th>{value}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as row, i (i)}
        <tr>
          {#each headers as item}
                <Bunka>
                          <!-- 2- tady zase říkám, že tohle je místo "cell" -->
                          <slot name="cell" cell="{row[item.key]}" />
            </Bunka>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  