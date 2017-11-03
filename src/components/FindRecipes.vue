<template>
    <div>
        <h1>Recipe Finder</h1>
        <form v-on:submit.prevent>
            <input v-model="newIngredient" @keyup="setNew" type="text">
            <button type="submit" @click="addToList"></button>
        </form>
        <ul>
            <li v-for="(item, index) in ingredientList" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FindRecipes",
        props: [ "ingredients", "new" ],
        data () {
            return {
                ingredientList: this.ingredients,
                newIngredient: this.new
            }
        },
        methods: {
            setNew(e) {
                this.$emit("onNewIngredient", e.target.value.toLowerCase())
            },

            addToList() {
                if (this.newIngredient && !this.ingredientList.includes(this.new)) {
                    this.$emit("addIngredient", this.newIngredient)
                    this.$emit("onNewIngredient", "")
                    this.newIngredient = ""
                } else {
                    alert("Must enter a new ingredient")
                }
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