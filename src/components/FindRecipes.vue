<template>
    <div>
        <h2>Find Recipes</h2>
        <recipes-search :ingredients="ingredients" @onNewRecipes="onNewRecipes" />
        <h2 v-if="recipeMatches.length > 0">Recipes</h2>
        <recipes-list :recipes="recipeMatches" />
    </div>
</template>

<script>
    import { id, key, url } from '../../api.js';
    import RecipesSearch from './RecipesSearch';
    import RecipesList from './RecipesList';

    export default {
        name: "FindRecipes",
        props: [ "ingredients" ],
        data () {
            return {
                recipeMatches: []
            }
        },
        methods: {
            onNewRecipes(recipes) {
                this.recipeMatches = recipes
            }
        },
        components: {
            RecipesSearch,
            RecipesList
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