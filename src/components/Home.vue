<template>
  <div>
    <header>
      <h1>Recipe Finder</h1>
      <!-- <img src="@/assets/logo.png" alt=""> -->
    </header>
    <Ingredients :ingredients="ingredientList" :newIngredient="newIngredient" :exactIngredients="exactIngredients" @onNewIngredient="onNewIngredient" @addIngredient="addIngredient" @onDeleteItem="onDeleteItem" @onExactIngredient="onExactIngredient" />
    <ClearList @onClearList="onClearList" />
    <FindRecipes :ingredients="ingredientList" :exactIngredients="exactIngredients" />        
  </div>
</template>

<script>
import FindRecipes from "./FindRecipes.vue";
import Ingredients from "./Ingredients.vue";
import ClearList from "./ClearList";

export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      ingredientList: [],
      newIngredient: "",
      exactIngredients: false
    };
  },
  methods: {
    onNewIngredient(ingredient) {
      this.newIngredient = ingredient;
    },

    addIngredient(ingredient) {
      console.log("ingredient added!");
      this.ingredientList.push(ingredient);
    },
    onDeleteItem(index) {
      console.log("deleting item!");
      this.$delete(this.ingredientList, index);
    },
    onClearList() {
      console.log("clearing list!");
      this.ingredientList = [];
    },
    onExactIngredient(bool) {
      console.log("inside exact");
      this.exactIngredients = bool;
    }
  },
  components: {
    FindRecipes,
    Ingredients,
    ClearList
  }
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: rgba(66, 184, 131, 0.61);
  margin-bottom: 30px;
  padding: 0;
}

h1,
h2 {
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
