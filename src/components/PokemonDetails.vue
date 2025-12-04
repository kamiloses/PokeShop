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
      <div class="pokemon-info">
        <span class="pokemon-type">⚡ Electric</span>
        <span class="rarity" :data-rarity="rarityvalue">{{ rarityvalue }}</span>
      </div>
      <div class="pokemon-actions">
        <span class="price">55$</span>
        <a class="details-link" href="#">View Details</a>
      </div>
    </div>


  </article>

</template>


<style scoped>
.pokemon-card {
  width: 24vw;
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


   /*footer*/
.pokemon-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.pokemon-info {
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #666;
}

.pokemon-type {
  background-color: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;
  font-weight: 500;
}

.rarity {
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;
  font-weight: 500;
  font-size: 0.8rem;
  color: white;
}

.rarity[data-rarity="Common"] { background: #6c757d; }
.rarity[data-rarity="Rare"] { background: #1e88e5; }
.rarity[data-rarity="Legendary"] { background: #fbc02d; color: black; }
.rarity[data-rarity="Mythical"] { background: #8e24aa; }

.pokemon-actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.price {
  font-size: 1.6rem;
  font-weight: 700;
}

.details-link {
  padding: 0.5rem 1rem;
  background-color: #1e88e5;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: background-color 0.2s ease;
}



</style>