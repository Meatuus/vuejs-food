<template>
    <div>
        <form v-on:submit.prevent>
            <label for="ingredient">Enter your ingredients</label>
            <input id="ingredient" v-model="ingredient" @keyup="setNew" type="text">
            <button type="submit" @click="addToList">Add</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "IngredientForm",
        props: [ "ingredients", "newIngredient" ],
        data () {
            return {
                ingredient: this.newIngredient
            }
        },
        methods: {
            setNew(e) {
                this.$emit("onNewIngredient", e.target.value.toLowerCase())
            },

            addToList() {
                if (this.ingredient && !this.ingredients.includes(this.newIngredient)) {
                    this.$emit("addIngredient", this.ingredient)
                    this.$emit("onNewIngredient", "")
                    this.ingredient = ""
                } else {
                    alert("Must enter a NEW ingredient")
                }
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    form {
        margin-top: 1rem;
    }

    label {
        display: block;

        font-size: 20px;
        margin-bottom: 10px;
    }

    input {
        border: none;
        border-bottom: 1px solid;
        padding: 5px;

        color: #567d7d;
        font-size: 20px;
    }

    button {
        background: #8dd4b3;
        border: none;
        border-radius: 2px;
        color: #36495e;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        padding: 7px 15px;
    }

    button:hover {
        background: #bae5d1;
    }
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