<template>
    <div>
        <h1>Recipes</h1>
        <form v-on:submit.prevent>
            <!-- <input v-model="newIngredient" @keyup="setNew" type="text"> -->
            <button type="submit" @click="searchRecipes">Find Recipes</button>
        </form>
        <ul>
            <li v-for="(item, index) in recipeMatches" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    import { id, key, url } from '../../api.js';

    export default {
        name: "FindRecipes",
        props: [ "ingredients" ],
        data () {
            return {
                ingredientList: this.ingredients,
                recipeMatches: []
            }
        },
        methods: {
            searchRecipes() {
                // combineIngredients(ingredients) {
                //     let result = ingredients.reduce(function (accumulator, currentValue) {
                //         return `${accumulator},${currentValue}`;
                //     });
                //     return result
                // }
                let combineIngredients = (ingredients) => { ingredients.reduce(function (accumulator, currentValue) {
                        return `${accumulator},${currentValue}`;
                    })}

                fetch(`${url}?q=${combineIngredients(this.ingredientList)}&app_id=${id}&app_key=${key}`)
                // fetch(`${url}?q=${ingredientsList.length > 1 ? combineIngredients(ingredientsList) : ingredientsList[0]}&app_id=${id}&app_key=${key}&ingr=${ingredientsList.length + parseInt(extrasAllowed, 10)}&to=30`)
                    .then((response) => {
                        return response.json()
                    })
                    .then((json) => {
                        // onNewRecipes(json.hits)
                        this.recipeMatches = json.hits
                    })
                    .catch((ex) => {
                        console.log('An error occured while parsing!', ex);
                    })
            }
            // setNew(e) {
            //     this.$emit("onNewIngredient", e.target.value.toLowerCase())
            // },

            // addToList() {
            //     if (this.newIngredient && !this.ingredientList.includes(this.new)) {
            //         this.$emit("addIngredient", this.newIngredient)
            //         this.$emit("onNewIngredient", "")
            //         this.newIngredient = ""
            //     } else {
            //         alert("Must enter a new ingredient")
            //     }
            // }
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