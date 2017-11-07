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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    } */
</style>