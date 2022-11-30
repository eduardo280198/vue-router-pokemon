<script setup>
  import axios from "axios";
  import {useRoute, useRouter} from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const back = () => {
    router.push('/pokemons');
  }

  const getData = async () => {
    try {
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.pokeName}`);
      console.log(data);
    }catch (e) {
      console.log(e);
    }
  }
  getData();

</script>

<template>
  <h1>Poke name: {{$route.params.pokeName}}</h1>
  <button @click="back">Volver</button>
</template>

<style scoped>

</style>