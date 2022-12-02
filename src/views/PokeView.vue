<script setup>
  import axios from "axios";
  import {useRoute, useRouter} from 'vue-router';
  import {ref} from "vue";

  const route = useRoute();
  const router = useRouter();

  const pokeImage = ref({});

  const back = () => {
    router.push('/pokemons');
  }

  const getData = async () => {
    try {
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.pokeName}`);
      pokeImage.value = data;
      console.log(data);
    }catch (e) {
      console.log(e);
      pokeImage.value = null;
    }
  }
  getData();

</script>

<template>

  <div v-if="pokeImage">
    <h1>Poke name: {{$route.params.pokeName}}</h1>
    <img :src="pokeImage.sprites?.front_default" alt="Sprite de enfrente">
    <img :src="pokeImage.sprites?.back_default" alt="Sprite de atras">
  </div>
  <h1 v-else>No existe el Pokemon</h1>
  <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>

<style scoped>

</style>