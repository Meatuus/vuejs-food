<template>
    <div class="recipe-container">
        <div v-if="ingredients.length > 0" :class="{ active: hasResults }" class="recipe-search">
            <h2 class="recipe-title">Lets Find Some Recipes</h2>
            <recipes-search :ingredients="ingredients" :recipes="recipeMatches" :exactIngredients="exactIngredients" @onNewRecipes="onNewRecipes" />
        </div>
        <h3 v-if="recipeMatches.length > 0">Recipes</h3>
        <recipes-list :recipes="recipeMatches" />
    </div>
</template>

<script>
    import { id, key, url } from '../../api.js';
    import RecipesSearch from './RecipesSearch';
    import RecipesList from './RecipesList';

    export default {
        name: "FindRecipes",
        props: [ "ingredients", "exactIngredients" ],
        data () {
            return {
                recipeMatches: [],
                hasResults: false
            }
        },
        methods: {
            onNewRecipes(recipes) {
                this.recipeMatches = recipes
                this.hasResults = true
            }
        },
        components: {
            RecipesSearch,
            RecipesList
        }
    }
</script>

<style scoped>
    h3 {
        margin-bottom: 0;
        font-size: 20px;
        font-weight: 600;
    }

    .recipe-container {
        /* border-top: 1px solid #577d7d; */
        margin: 40px;
    }

    .recipe-search {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .recipe-search.active {
        border-bottom: 1px solid #577d7d;
    }

    .recipe-title {
        margin-right: 30px;
    }

    @media screen and (max-width: 999px) {
        .recipe-container {
            margin: 20px;
        }
    }

    @media screen and (max-width: 650px) {
        .recipe-container {
            margin: 10px;
        }
    }
</style>