import { Pokemon } from "@/models/Pokemon.js";
export const pokemonsData = [

    new Pokemon(1, 'Pikachu', 'An electric Pokémon that loves sparks and adventures.', {
        name: 'Electric',
        icon: '⚡'
    }, 'Rare', 120),

    new Pokemon(2, 'Bulbasaur', 'A plant Pokémon with a bulb on its back that grows over time.', {
        name: 'Grass',
        icon: '🌿'
    }, 'Common', 80),

    new Pokemon(3, 'Charizard', 'A powerful fire dragon that flies high and breathes fire.', {
        name: 'Fire',
        icon: '🔥'
    }, 'Legendary', 500),

    new Pokemon(4, 'Squirtle', 'A small turtle Pokémon that shoots water with surprising power.', {
        name: 'Water',
        icon: '💧'
    }, 'Common', 90),

    new Pokemon(5, 'Eevee', 'A cute Pokémon with unstable genetic structure that allows many evolutions.', {
        name: 'Normal',
        icon: '⭐'
    }, 'Rare', 150),

    new Pokemon(6, 'Gengar', 'A mischievous ghost Pokémon that lurks in the shadows.', {
        name: 'Ghost',
        icon: '👻'
    }, 'Legendary', 420),
];