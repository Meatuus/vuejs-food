<template>
    <div>
        <IngredientForm :ingredients="ingredients" :newIngredient="newIngredient" :exactIngredients="exactIngredients" @onNewIngredient="onNewIngredient" @addIngredient="addIngredient" @onExactIngredient="onExactIngredient" />
        <IngredientList :ingredients="ingredients" @onDeleteItem="onDeleteItem" />
    </div>
</template>

<script>
    import IngredientForm from "./IngredientForm";
    import IngredientList from './IngredientList';

    export default {
        name: "Ingredients",
        props: [ "ingredients", "newIngredient", "exactIngredients" ],
        methods: {
            onNewIngredient(item) {
                this.$emit("onNewIngredient", item)
            },
            addIngredient(item) {
                this.$emit("addIngredient", item)
            },
            onDeleteItem(index) {
                this.$emit("onDeleteItem", index)
            },
            onExactIngredient(bool) {
                this.$emit("onExactIngredient", bool)
            }
        },
        components: {
            IngredientForm,
            IngredientList
        }

    }
</script>