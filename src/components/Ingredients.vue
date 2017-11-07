<template>
    <div>
        <IngredientForm :ingredients="ingredients" :newIngredient="newIngredient" @onNewIngredient="onNewIngredient" @addIngredient="addIngredient"/>
        <IngredientList :ingredients="ingredients" @onDeleteItem="onDeleteItem" />
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
            },
            onDeleteItem(index) {
                this.$emit("onDeleteItem", index)
            }
        },
        components: {
            IngredientForm,
            IngredientList
        }

    }
</script>