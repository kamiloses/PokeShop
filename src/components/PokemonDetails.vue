<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

</script>



<template>
  <article class="pokemon-card">
    <img src="/Pikachu.jpg" alt="Pikachu">
    <h2>{{props.pokemon.name}}</h2>
    <p>
      {{props.pokemon.description}}
    </p>
    <div class="pokemon-card-footer">
      <div class="pokemon-info">
           <span class="pokemon-type" :class="`type-${props.pokemon.type.name.toLowerCase()}`">{{props.pokemon.type.icon}} {{props.pokemon.type.name}}</span>
        <span class="rarity" :data-rarity="props.pokemon.rarity">{{props.pokemon.rarity }}</span>
      </div>
      <div class="pokemon-actions">
        <span class="price">{{props.pokemon.price}}$</span>
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



.type-electric { background-color: #fdd835; color: black; }
.type-water    { background-color: #42a5f5; }
.type-fire     { background-color: #ef5350; }
.type-grass    { background-color: #66bb6a; }
.type-ice      { background-color: #81d4fa; color: black; }
.type-psychic  { background-color: #ab47bc; }
.type-normal   { background-color: #9e9e9e; }
.type-flying   { background-color: #90caf9; }

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