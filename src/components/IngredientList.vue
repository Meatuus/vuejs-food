<template>
  <div>
    <ul>
      <li v-for="(item, index) in this.$store.state.ingredientList" :key="index">
        <p>{{ item }}</p>
        <button @click="deleteIngredient(index)" >X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IngredientList",  
  methods: {
    deleteIngredient(index) {      
      this.$store.commit("deleteIngredient", index);
    }
  }
};
</script>

<style scoped>
ul {
  padding: 0;
  list-style-type: none;
  margin: 0 0 15px;
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
</style>