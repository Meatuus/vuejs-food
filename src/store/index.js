import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ingredientList: [],
        newIngredient: "",
        exactIngredients: false,
    },
    mutations: {
        newIngredient (state, ingredient) {            
            state.newIngredient = ingredient;
        },
        addIngredient (state, ingredient) {
            state.ingredientList.push(ingredient);
            state.newIngredient = "";
        },
        exactIngredients(state, bool) {            
            state.exactIngredients = bool;
        },
        deleteIngredient (state, index) {                        
            state.ingredientList = state.ingredientList.filter((item, i) => i !== index);            
        },
        clearList (state) {
            state.ingredientList = [];
        },
    }
});