<template>
    <div>
        <ul>
            <li class="item-container" v-for="(item, index) in recipes" :key="index">
                <h3>{{ item.recipe.label }}</h3>
                <div class="recipe-container">
                    <div class="image-wrap">
                        <img :src="item.recipe.image" alt="">
                    </div>
                    <div class="info">
                        <ul class="ingredients">
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

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        text-align: left;
        margin: 25px 0 20px 20px;
        background: #2d3f51;
        width: max-content;
        padding: 7px 15px;
        border-radius: 2px;
        color: white;
        font-weight: bold;
    }

    a:hover {
        background: rgba(45, 63, 81, 0.84);
    }

    .item-container {
        background: rgba(141, 212, 179, 0.41);
        padding: 1px 20px 20px 20px;
        margin: 20px 0;
    }

    .recipe-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    .info {
        width: calc(100% - 180px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .ingredients {
        text-align: left;
        margin-left: 20px;
    }

</style>