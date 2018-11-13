<template>
  <div>
    <form v-on:submit.prevent>
      <label for="ingredient">Enter your ingredients</label>
      <input id="ingredient" :value="this.$store.state.newIngredient" @keyup="newIngredient" type="text">
      <button type="submit" @click="addToList">Add</button>
    </form>
    <div class="exact-container">
      <h3>Check to search recipes with only your ingredients</h3>
      <label class="exact-label" for="checkbox"><span :class="{checked: this.$store.state.exactIngredients}" ></span></label>
      <input id="checkbox" type="checkbox" @click="exactIngredients">
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientForm",
  methods: {
    newIngredient(e) {
      this.$store.commit('newIngredient', e.target.value.toLowerCase());
    },
    addToList() {
      const newIngredient = this.$store.state.newIngredient;
      const ingredientList = this.$store.state.ingredientList;
      
      if (newIngredient && !ingredientList.includes(newIngredient)) {
        this.$store.commit('addIngredient', newIngredient);        
      } else {
        alert("Must enter a NEW ingredient");
      }
    },
    exactIngredients(e) {
      this.$store.commit('exactIngredients', e.target.checked);
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 1rem;
}

label {
  display: block;

  font-size: 20px;
  margin-bottom: 10px;
}

input {
  border: none;
  border-bottom: 1px solid;
  padding: 5px;

  color: #567d7d;
  font-size: 20px;
}

button {
  background: #8dd4b3;
  border: none;
  border-radius: 2px;
  color: #36495e;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 7px 15px;
}

button:hover {
  background: #bae5d1;
}

h3 {
  font-size: 16px;
  font-weight: normal;
  width: calc(100% - 65px);

  text-align: left;
}

.exact-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;

  margin: 0 15px;
}

input[type="checkbox"] {
  visibility: hidden;
  margin: 0;
}

.exact-label {
  margin: 10px 20px 10px 0;
  width: 20px;
  height: 20px;
  border: 1px solid;
  border-radius: 2px;
  background: white;
  position: relative;
  cursor: pointer;
}

span {
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 2px;
  content: " ";
  position: absolute;
  transform: translateX(-50%) translateY(calc(50% - 2px));
}

.checked {
  /* left: 27px; */
  background: #36495e;
}
</style>