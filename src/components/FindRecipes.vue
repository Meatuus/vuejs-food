<template>
    <div class="recipe-container">
        <div class="recipe-search">
            <h2 class="recipe-title">Lets Find Some Recipes</h2>
            <recipes-search :ingredients="ingredients" :recipes="recipeMatches" @onNewRecipes="onNewRecipes" />
        </div>
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

<style scoped>

    .recipe-container {
        border-top: 1px solid #577d7d;
        margin: 40px;
    }

    .recipe-search {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .recipe-title {
        margin-right: 30px;
    }
</style>