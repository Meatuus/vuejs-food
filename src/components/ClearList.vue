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
</style>