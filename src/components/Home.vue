<script setup>

import PokemonDetails from "@/components/PokemonDetails.vue";
import {computed, ref} from "vue";
import {pokemonsData} from "@/models/PokemonsData.js";


const pokemons = pokemonsData;


const rarityOptions = ['All','Common','Rare','Legendary','Mythical'];
const sortOptions=['NAME A-Z','NAME Z-A','PRICE LOW-HIGH','PRICE HIGH-LOW'];


let filter = ref(rarityOptions[0]);
let sort=ref(sortOptions[0]);

function selectSort(newSort){
  sort.value = newSort;
}

function selectFilter(newFilter) {
  filter.value = newFilter;}


const filteredPokemons = computed(() => {
  if (filter.value === "All") return pokemons;
  return pokemons.filter(p => p.rarity === filter.value);
});
const sortedPokemons = computed(() => {
  if (sort.value === "NAME A-Z") return pokemons;
  return pokemons.filter(p => p.rarity === filter.value);
});




</script>


<template>
  <main>
    <section class="hero">
      <h1>Catch ’Em All – Your Ultimate Pokémon Shop for Trainers Everywhere</h1>
      <input type="text" placeholder="Search your favourite pokemon...">
    </section>


    <section class="filters-section">
      <h1>Discover our collection</h1>
      <div class="filters">
        <ul class="rarity">
          <li v-for="option in rarityOptions" :key="option">
            <button @click="selectFilter(option)">{{ option }}</button>
          </li>
        </ul>
        <select class="sort-select">
          <option  v-for="sortOption in sortOptions" :key="sortOption" @click="">{{sortOption}}</option>
        </select>
      </div>
    </section>


    <section class="collection">

      <PokemonDetails v-for="pokemon in filteredPokemons" :key="pokemon.id" :pokemon="pokemon"></PokemonDetails>


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

section.filters-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #1a1f2e;
  height: 17vh;

}

section.filters-section h1 {
  margin: 0 auto;
  color: white;
  font-size: 3rem;

}

.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 9%;
  margin-top: 1.5%;
  gap: 2rem;
}

.filters button {
  padding: 1rem;
  min-width: 120px;
  border: 2px solid #3b2f55;
  border-radius: 0.5rem;
  background-color: #1a1f2e;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.filters button:hover {
  border-color: #6a0dad;
  background-color: #3b2f55;
}


ul.rarity {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.sort-select {
  margin-right: 10%;
  padding: 1rem;
  min-width: 120px;
  border: 2px solid #3b2f55;
  border-radius: 0.5rem;
  background-color: #1a1f2e;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.sort-select:hover {
  border-color: #6a0dad;
}

/*section 3*/
.collection {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 3rem;
  background-color: #1a1f2e;
  flex-wrap: wrap;


}

</style>