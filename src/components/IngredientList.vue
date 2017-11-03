<template>
    <div>
        <ul>
            <li v-for="(item, index) in ingredientList" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "IngredientList",
        props: [ "ingredients" ],
        data () {
            return {
                ingredientList: this.ingredients
            }
        }
        // methods: {
        //     setNew(e) {
        //         this.$emit("onNewIngredient", e.target.value.toLowerCase())
        //     },

        //     addToList() {
        //         if (this.ingredient && !this.ingredientList.includes(this.newIngredient)) {
        //             this.$emit("addIngredient", this.ingredient)
        //             this.$emit("onNewIngredient", "")
        //             this.ingredient = ""
        //         } else {
        //             alert("Must enter a new ingredient")
        //         }
        //     }
        // }

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