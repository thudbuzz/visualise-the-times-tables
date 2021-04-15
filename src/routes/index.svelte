<script>
</script>

<svelte:head>
  <title>Times Table App</title>
</svelte:head>

<main>
  <div class="grid">
    {#each Array(10) as _, row}
      {#each Array(10) as _, i}
        <div class="grid-item">{i + 1 + 10 * row}</div>
      {/each}
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
  }

  .grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gainsboro;
    height: 35px;
    width: 35px;
  }
</style>
