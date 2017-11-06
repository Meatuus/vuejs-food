<template>
    <div>
        <IngredientForm :ingredients="ingredients" :newIngredient="newIngredient" @onNewIngredient="onNewIngredient" @addIngredient="addIngredient"/>
        <IngredientList :ingredients="ingredients" />
    </div>
</template>

<script>
    import IngredientForm from "./IngredientForm";
    import IngredientList from './IngredientList';

    export default {
        name: "Ingredients",
        props: [ "ingredients", "newIngredient" ],
        methods: {
            onNewIngredient(item) {
                this.$emit("onNewIngredient", item)
            },

            addIngredient(item) {
                this.$emit("addIngredient", item)
            }
        },
        components: {
            IngredientForm,
            IngredientList
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