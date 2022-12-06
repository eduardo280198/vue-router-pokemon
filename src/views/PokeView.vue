<script setup>
  import {useRoute, useRouter} from 'vue-router';
  import {useFavoritosStore} from '@/store/favoritos.js'

  import {useGetData} from '@/composables/getData';

  const {getData, data, loading, errorData} = useGetData();

  const route = useRoute();
  const router = useRouter();
  const useFavoritos = useFavoritosStore();

  const {add, findPoke} = useFavoritos;

  const back = () => {
    router.push('/pokemons');
  }

  getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokeName}`);

</script>

<template>

  <p v-if="loading">Cargando Información...</p>
  <div class="alert alert-danger mt-2" v-if="errorData">{{errorData}}</div>

  <div  v-if="data">
    <h1>Poke name: {{$route.params.pokeName}}</h1>
    <h2>Peso: {{data.weight/10}} Kg</h2>
    <h2>Habilidad: {{data.abilities[0]?.ability.name}}</h2>
    <h3>Tipo: {{data.types[0]?.type.name}}</h3>

    <img :src="data.sprites?.front_default" alt="Sprite de enfrente">
    <img :src="data.sprites?.back_default" alt="Sprite de atras">

    <img :src="data.sprites?.front_shiny">
    <img :src="data.sprites?.back_shiny">

    <br>
    <button :disabled="findPoke(data.name)" class="btn btn-primary mb-2" @click="add(data)">Agregar Favoritos</button>
  </div>

  <button @click="back" class="btn btn-outline-danger">Volver</button>
</template>

<style scoped>

</style>