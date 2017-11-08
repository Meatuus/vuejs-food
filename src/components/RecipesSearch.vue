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
        props: [ "ingredients", "recipes", "exactIngredients" ],
        data () {
            return {
                recipeMatches: []
            }
        },
        methods: {
            searchRecipes() {

                const combineIngredients = (array) => { return array.reduce((acc, cur) => {return `${acc},${cur}`})}
                const urlCall = `${url}?q=${combineIngredients(this.ingredients)}&app_id=${id}&app_key=${key}`
                const ingrNum = this.ingredients.length

                fetch(`${urlCall}${this.exactIngredients ? `&ingr=${ingrNum}` : ""}&to=30`)
                    .then((response) => {
                        return response.json()
                    })
                    .then((json) => {
                        this.recipeMatches = json.hits
                        this.$emit("onNewRecipes", this.recipeMatches)

                        // call second request with more allowed ingredients
                        if (this.recipeMatches.length < 20 && this.exactIngredients) {
                            fetch(`${urlCall}&ingr=${ingrNum + 1}&to=30`)
                                .then((res) => {
                                    return res.json()
                                })
                                .then((blob) => {
                                    let array = []
                                    this.recipeMatches.forEach(function(element) {
                                        array.push(element.recipe.label)
                                    }, this);
                                    blob.hits.forEach(function(element) {
                                        if (!array.includes(element.recipe.label)) {
                                            this.recipeMatches.push(element)
                                            console.log('not duplicate');
                                        }
                                    }, this);
                                    this.$emit("onNewRecipes", this.recipeMatches)
                                })
                                .catch((err) => {
                                    console.log('An error occured while parsing!', err);
                                })
                        }
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