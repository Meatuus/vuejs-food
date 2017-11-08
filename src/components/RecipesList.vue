<template>
    <div>
        <ul class="container">
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

    li {
        width: calc(100% - 20px);
    }

    a {
        text-decoration: none;
        text-align: left;
        margin: 25px auto 5px;
        background: #2d3f51;
        width: max-content;
        padding: 7px 15px;
        border-radius: 2px;
        color: white;
        font-weight: bold;

        position: absolute;
        bottom: 10px;
        right: calc(50% - 60px);
    }

    a:hover {
        background: rgba(45, 63, 81, 0.84);
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        margin-top: 5px;
    }

    .item-container {
        background: rgba(141, 212, 179, 0.41);
        padding: 1px 20px 20px 20px;
        margin: 10px 0 0;

        width: calc(33.3333333% - 6.6666667px);
        box-sizing: border-box;

        position: relative;
    }

    .recipe-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .ingredients {
        text-align: left;
        /* margin-left: 20px;
        margin-top: 20px; */
        margin: 20px 0 50px 20px;
        width: 100%;

        list-style-type: circle;
    }

    .image-wrap {
        width: 100%;
    }

    img {
        width: 100%;
    }

    @media screen and (max-width: 999px) {
        .item-container {
            width: calc(50% - 5px);
        }

    }

    @media screen and (max-width: 650px) {
        .item-container {
            width: 100%;
        }

    }

    @media screen and (max-width: 400px) {
        .item-container {
            padding: 1px 15px 20px;
        }

    }
</style>