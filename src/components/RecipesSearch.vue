<template>
    <div>
        <form v-on:submit.prevent>
            <button type="submit" @click="searchRecipes">Find Recipes</button>
        </form>
    </div>
</template>

<script>
    import { id, key, url } from '../../api.js';

    export default {
        name: "RecipesSearch",
        props: [ "ingredients" ],
        methods: {
            searchRecipes() {

                const combineIngredients = (array) => { return array.reduce((acc, cur) => {return `${acc},${cur}`})}

                fetch(`${url}?q=${combineIngredients(this.ingredients)}&app_id=${id}&app_key=${key}`)
                    .then((response) => {
                        return response.json()
                    })
                    .then((json) => {
                        this.$emit("onNewRecipes", json.hits)
                    })
                    .catch((ex) => {
                        console.log('An error occured while parsing!', ex);
                    })
            }
        }
    }
</script>

<style scoped>
    button {
        border: none;
        background: #8dd4b2;
        color: #374a5e;
        font-weight: bold;
        font-size: 16px;
        border-radius: 2px;
        padding: 7px 15px;
        cursor: pointer;
    }

    button:hover {
        background: #bae5d1;
    }
</style>