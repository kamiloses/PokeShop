<script setup>

let rarity=["Common","Rare","Legendary","Mythical"];
let rarityvalue=rarity[2];

</script>

<template>
  <article class="pokemon-card">
    <img src="/Pikachu.jpg" alt="Pikachu">
    <h2>Pikachu</h2>
    <p>
      Pikachu is an Electric-type Pokémon known for its yellow fur and powerful electric attacks.
      It is cheerful, loyal, and one of the most recognizable Pokémon in the world.
    </p>
    <div class="pokemon-card-footer">
      <span>55$</span>
      <span class="pokemon-type">⚡ Electric</span>
      <span class="rarity" :data-rarity="rarityvalue">{{ rarityvalue }}
</span>
      <a href="#">View Details</a>
    </div>


  </article>

</template>


<style scoped>
.pokemon-card {
  width: 26vw;
  background: #fff;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.pokemon-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.pokemon-card img {
  width: 100%;
  border-radius: 0.8rem;
  object-fit: cover;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
}

.pokemon-card p {
  color: #444;
  line-height: 1.4;
}

.pokemon-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;}

.pokemon-card-footer span {
  font-weight: bold;
  font-size: 1.3rem;
}
.pokemon-type {
  padding: 0.4rem 0.6rem;
  background: #fcefcf;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  color: #b88600;
  order:-1;
}

/*RARITY*/
.rarity {
  padding: 0.4rem 0.7rem;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  order: -1;
}

.rarity[data-rarity="Common"] {
  background: #6c757d;
}

.rarity[data-rarity="Rare"] {
  background: #1e88e5;
}

.rarity[data-rarity="Legendary"] {
  background: #fbc02d;
  color: black;
}

.rarity[data-rarity="Mythical"] {
  background: #8e24aa;
}








a {
  padding: 0.6rem 1.2rem;
  background-color: #e63946;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: background-color 0.2s ease;
}


a:hover {
  background-color: #c5303a;
}

</style>