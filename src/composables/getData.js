import axios from "axios";
import {ref} from 'vue';

export const useGetData = () => {

    const data = ref(null);

    const getData = async (url) => {
        try {
            const res = await axios.get(url);
            pokemons.value = data.results;

        } catch (error) {
            console.log(error);
        }
    }

    return{
        getData,
    }
}