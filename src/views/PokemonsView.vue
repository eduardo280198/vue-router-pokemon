<script setup>
    import {RouterLink} from "vue-router";
    import {useGetData} from '@/composables/getData'

    const {data, getData, loading} = useGetData()

    getData('https://pokeapi.co/api/v2/pokemon');

</script>

<template>

  <h1>Pokemons</h1>

  <p v-if="loading">Cargando información...</p>

  <div v-if="data">
    <ol>
      <li v-for="poke in data.results" :key="poke.name">
        <RouterLink :to="`/pokemons/${poke.name}`">{{poke.name}}</RouterLink>
      </li>
    </ol>
  </div>

</template>