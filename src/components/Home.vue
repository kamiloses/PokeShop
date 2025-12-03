<script setup>

</script>

<template>
  <main>
    <section class="hero">
      <h1>Catch ’Em All – Your Ultimate Pokémon Shop for Trainers Everywhere</h1>
      <input type="text" placeholder="Search your favourite pokemon...">
    </section>


    <section class="collection">
      <h1>Discover our collection</h1>
      <div class="filters">
        <ul class="rarity">
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Common</button>
          </li>
          <li>
            <button>Rare</button>
          </li>
          <li>
            <button>Legendary</button>
          </li>
          <li>
            <button>Mythical</button>
          </li>
        </ul>
        <select class="sort-select">
          <option>PRICE LOW-HIGH</option>
          <option>PRICE HIGH-LOW</option>
          <option>NAME A-Z</option>
          <option>NAME Z-A</option>
        </select>
      </div>
    </section>


  </main>
</template>

<style scoped>
main {
  padding: 0;
  margin: 0;

}

section.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6a0dad, #1e90ff);
  color: white;
  min-height: 40vh;
  gap: 2rem;
}


section.hero h1 {
  width: 80%;
  max-width: 800px;
  font-size: 3rem;
  text-align: center;
  margin: 0;
}

section.hero input {
  width: 80%;
  max-width: 500px;
  height: 4rem;
  background-color: #000;
  color: #ffcc00;
  border: none;
  border-radius: 1rem;
  padding: 0 1rem;
  font-size: 1.1rem;
}

/* Section 2 */

section.collection {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: darkslategrey;
  height: 10vh;

}

section.collection h1 {
  margin: auto auto;
  color: white;
  font-size: 3rem;

}

.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;
}

.filters button {
  padding: 1rem;
  min-width: 120px;
  border: none;
  border-radius: 0.5rem;
  background-color: green;
  color: white;
  cursor: pointer;
  font-size: 1rem;
}


ul.rarity {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.sort-select{
  padding: 1rem;
  min-width: 120px;
  border: none;
  border-radius: 0.5rem;
  background-color: green;
  color: white;
  cursor: pointer;
  font-size: 1rem;

}

</style>