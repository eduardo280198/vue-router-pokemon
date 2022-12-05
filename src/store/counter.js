import {defineStore} from 'pinia';
import {computed, ref} from "vue";

export const useCounterStore = defineStore('counter', () => {

    const count = ref(0);

    const increment = () => count.value ++;

    const double = computed( () => count.value * 2);

    return{
        count,
        increment,
        double
    }
});

/*
export const useCounterStore = defineStore('counter', {
    // state == data (variables? / lo que se mostrara en la pantalla)
    state: () => ({
        count: 0,
    }),
    // actions == methods
    actions:{
        increment() {
            this.count++;
        },
    },
    // getters == computed (transforma la variable o hace algun tipo de calculo antes de retornarla)
    getters: {
        double: (state) => state.count * 2,
    },
});*/
