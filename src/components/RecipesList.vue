<template>
    <div>
        <ul>
            <li v-for="(item, index) in recipes" :key="index">
                <h3>{{ item.recipe.label }}</h3>
                <div>
                    <div>
                        <img :src="item.recipe.image" alt="">
                    </div>
                    <div>
                        <ul>
                            <li v-for="(ing, i) in item.recipe.ingredientLines" :key="i" >{{ ing }}</li>
                        </ul>
                        <a :href="item.recipe.url" target="_blank">View Recipe</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "RecipesList",
        props: [ "recipes" ]
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