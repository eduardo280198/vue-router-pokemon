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
    <img :src="data.sprites?.front_default" alt="Sprite de enfrente">
    <img :src="data.sprites?.back_default" alt="Sprite de atras">
  </div>
  <button :disabled="findPoke(data.name)" class="btn btn-primary me-2" @click="add(data)">Agregar Favoritos</button>

  <button @click="back" class="btn btn-outline-danger">Volver</button>
</template>

<style scoped>

</style>