<template>
    <div>
        <button @click="onClearList">Clear List</button>
    </div>
</template>

<script>
    export default {
        name: "ClearList",
        methods: {
            onClearList() {
                this.$emit("onClearList")
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    button {
        background: #ff6565;
        border-radius: 2px;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        padding: 5px 11px;
    }

    button:hover {
        background: #f33939;
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