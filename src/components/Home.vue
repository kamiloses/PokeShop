<script setup>

import PokemonDetails from "@/components/PokemonDetails.vue";
import {Pokemon} from "@/models/Pokemon.js";
import {computed, ref} from "vue";


const pikachu = new Pokemon(1, 'Pikachu', 'An electric Pokémon that loves sparks and adventures.', {
  name: 'Electric',
  icon: '⚡'
}, 'Rare', 120);

const bulbasaur = new Pokemon(2, 'Bulbasaur', 'A plant Pokémon with a bulb on its back that grows over time.', {
  name: 'Grass',
  icon: '🌿'
}, 'Common', 80);

const charioted = new Pokemon(3, 'Charizard', 'A powerful fire dragon that flies high and breathes fire.', {
  name: 'Fire',
  icon: '🔥'
}, 'Legendary', 500);

const pokemons = [pikachu, bulbasaur, charioted];
const rarityOptions = ['All','Common','Rare','Legendary','Mythical'];
//od tąd

let filter = ref("All");


function selectFilter(newFilter) {
  filter.value = newFilter;}


const filteredPokemons = computed(() => {
  if (filter.value === "All") return pokemons;
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
          <option>PRICE LOW-HIGH</option>
          <option>PRICE HIGH-LOW</option>
          <option>NAME A-Z</option>
          <option>NAME Z-A</option>
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
  background-color: darkslategrey;
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
  margin-left: 50px;
  margin-top: 50px;
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

.sort-select {
  padding: 1rem;
  min-width: 120px;
  border: none;
  border-radius: 0.5rem;
  background-color: green;
  color: white;
  cursor: pointer;
  font-size: 1rem;


}

/*section 3*/
.collection {
  display: flex;
  justify-content: space-around;
  background-color: darkslategrey;

}

</style>