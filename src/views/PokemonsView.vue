<script setup>
    import {RouterLink} from "vue-router";
    import {useGetData} from '@/composables/getData'

    const {data, getData, loading, errorData} = useGetData()

    getData('https://pokeapi.co/api/v2/pokemon');

</script>

<template>

  <h1>Pokemons</h1>

  <p v-if="loading">Cargando información...</p>
  <div class="alert alert-danger mt-2" v-if="errorData">{{errorData}}</div>

  <div v-if="data">
    <ul class="list-group">
      <li class="list-group-item" v-for="poke in data.results" :key="poke.name">
        <RouterLink :to="`/pokemons/${poke.name}`">{{poke.name}}</RouterLink>
      </li>
    </ul>

    <div class="btn-group mt-2" role="group" arial-label="Basic example">
      <button :disabled="!data.previous" class="btn btn-danger" @click="getData(data.previous)">Previous</button>
      <button class="btn btn-warning" @click="getData('https://pokeapi.co/api/v2/pokemon')">Inicio</button>
      <button :disabled="!data.next" class="btn btn-success" @click="getData(data.next)">Next</button>
    </div>
  </div>

</template>