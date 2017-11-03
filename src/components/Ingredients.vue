<template>
    <div>
        <IngredientForm :ingredients="ingredients" :newIngredient="newIngredient" v-on:onNewIngredient="onNewIngredient" v-on:addIngredient="addIngredient"/>

        <!-- <form v-on:submit.prevent>
            <input v-model="newIngredient" @keyup="setNew" type="text">
            <button type="submit" @click="addToList"></button>
        </form> -->
        <ul>
            <li v-for="(item, index) in ingredients" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    import IngredientForm from "./IngredientForm";

    export default {
        name: "Ingredients",
        props: [ "ingredients", "newIngredient" ],
        // data () {
        //     return {
        //         ingredientList: this.ingredients,
        //         newIngredient: this.new
        //     }
        // },
        methods: {
            onNewIngredient(item) {
                this.$emit("onNewIngredient", item)
            },

            addIngredient(item) {
                this.$emit("addIngredient", item)
            }
        },
        components: {
            IngredientForm
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