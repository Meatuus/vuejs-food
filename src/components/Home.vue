<template>
  <div>
    <header>
      <h1>Recipe Finder</h1>
      <!-- <img src="@/assets/logo.png" alt=""> -->
    </header>    
    <IngredientForm />
    <IngredientList />
    <ClearList />
    <FindRecipes :ingredients="ingredientList" :exactIngredients="exactIngredients" />        
  </div>
</template>

<script>
import FindRecipes from "./FindRecipes.vue";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ClearList from "./ClearList";

export default {
  name: "Home",
  props: ["testProps", "otherprop"],
  data() {
    return {      
      ingredientList: [],
      newIngredient: "",
      exactIngredients: false
    };
  },
  components: {
    FindRecipes,    
    IngredientForm,
    IngredientList,
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
