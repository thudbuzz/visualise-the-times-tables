<script>
  let tableNum = 3;
</script>

<svelte:head>
  <title>Times Table App</title>
</svelte:head>

<main>
  <h1>Visualise The Times Tables</h1>
  <div class="grid">
    {#each Array(10) as _, row}
      {#each Array(10) as _, i}
        {#if !((i + 1 + 10 * row) % tableNum)}
          <div class="grid-item green">{i + 1 + 10 * row}</div>
        {:else}
          <div class="grid-item">{i + 1 + 10 * row}</div>
        {/if}
      {/each}
    {/each}
  </div>
  <div class="btn-row">
    {#each Array(10) as _, a}
      <button class="btn" on:click={() => (tableNum = a + 1)}>{a + 1}</button>
    {/each}
  </div>
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
    width: 360px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1px;
  }

  .grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gainsboro;
    height: 35px;
    width: 35px;
  }

  .green {
    background-color: greenyellow;
  }
  .btn-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1px;
    margin-top: 1em;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    font-size: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }
</style>
