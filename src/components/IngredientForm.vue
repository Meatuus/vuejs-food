<template>
    <div>
        <form v-on:submit.prevent>
            <label for="ingredient">Enter your ingredients</label>
            <input id="ingredient" v-model="ingredient" @keyup="setNew" type="text">
            <button type="submit" @click="addToList">Add</button>
        </form>
        <div class="exact-container">
            <h3>Check to search recipes with only your ingredients</h3>
            <label class="exact-label" for="checkbox"><span :class="{checked: exactIngredients}" ></span></label>
            <input id="checkbox" type="checkbox" @click="exactIngredientChange">
        </div>
    </div>
</template>

<script>
    export default {
        name: "IngredientForm",
        props: [ "ingredients", "newIngredient", "exactIngredients" ],
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
                    this.$emit("addIngredient", this.ingredient.toLowerCase())
                    this.$emit("onNewIngredient", "")
                    this.ingredient = ""
                } else {
                    alert("Must enter a NEW ingredient")
                }
            },
            exactIngredientChange(e) {
                console.log(e.target.checked);
                this.$emit("onExactIngredient", e.target.checked)
            }
        }

    }
</script>

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

    h3 {
        font-size: 16px;
        font-weight: normal;
    }

    .exact-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row-reverse;
    }

    input[type=checkbox] {
        visibility: hidden;
    }



    label.exact-label {
        margin: 10px 10px 10px 0;
    }

    label.exact-label {
        width: 20px;
        height: 20px;
        border: 1px solid;
        border-radius: 2px;
        background: white;
        margin: 10px;
        position: relative;
        cursor: pointer;
    }

    span {
        width: 12px;
        height: 12px;
        background: white;
        border-radius: 2px;
        content: " ";
        position: absolute;
        transform: translateX(-50%) translateY(calc(50% - 2px));
    }

    .checked {
        /* left: 27px; */
        background: #36495e
    }
</style>