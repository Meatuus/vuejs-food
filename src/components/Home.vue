<template>
    <div>
        <header>
            <div class="logo-wrap">
                <img src="../assets/logo.png">
            </div>
            <h1>Recipe Finder</h1>
        </header>
        <Ingredients :ingredients="ingredientList" :newIngredient="newIngredient" @onNewIngredient="onNewIngredient" @addIngredient="addIngredient" @onDeleteItem="onDeleteItem" />
        <ClearList @onClearList="onClearList" />
        <FindRecipes :ingredients="ingredientList" />        
    </div>
</template>

<script>
    import FindRecipes from './FindRecipes.vue'
    import Ingredients from './Ingredients.vue'
    import ClearList from './ClearList'

    export default {
        name: 'Home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
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
        },
        methods: {
            onNewIngredient(ingredient) {
                this.newIngredient = ingredient
            },

            addIngredient(ingredient) {
                console.log('ingredient added!');
                this.ingredientList.push(ingredient)
            },
            onDeleteItem(index) {
                console.log('deleting item!');
                this.$delete(this.ingredientList, index)
            },
            onClearList() {
                console.log('clearing list!');
                this.ingredientList = []
            }
        },
        components: {
            FindRecipes,
            Ingredients,
            ClearList
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        background: rgba(66, 184, 131, 0.61);
        margin-bottom: 30px;
        padding: 30px 0;
    }

    h1, h2 {
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
    }

    img {
        max-width: 100%;
    }

    .logo-wrap {
        width: 45px;
        margin-right: 30px;
    }

</style>
