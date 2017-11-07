<template>
    <div>
        <ul>
            <li v-for="(item, index) in ingredients" :key="index">
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
        methods: {
            deleteItem(index) {
                this.$emit("onDeleteItem", index)
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        padding: 0;
        list-style-type: none;
        margin: 30px 0 15px;
    }

    li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        margin: 8px auto;
    }

    p {
        margin: 0;
        font-size: 16px;
    }

    button {
        background: white;
        border: 1px solid #3a4b5c;
        border-radius: 2px;
        color: #2d3f51;
        cursor: pointer;
        font-weight: bold;
    }

    button:hover {
        background: #ebebeb;
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