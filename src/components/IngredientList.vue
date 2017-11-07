<template>
    <div>
        <ul>
            <li v-for="(item, index) in ingredientList" :key="index">
                <p>{{ item }}</p>
                <button @click="deleteItem(index)" >X</button>
            </li>
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
        },
        methods: {
            deleteItem(index) {
                this.$emit("onDeleteItem", index)
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