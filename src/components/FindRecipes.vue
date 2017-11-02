<template>
    <div>
        <h1>Recipe Finder</h1>
        <form action="">
            <input v-model="newIngredient" type="text">
        </form>
        <ul>
            <li v-for="(item, index) in ingredientList" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FindRecipes",
        data () {
            return {
                ingredientList: [
                    "basil",
                    "tomato",
                    "onion",
                    "salt",
                    "pepper",
                    "olive oil"
                ],
                newIngredient: ""
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