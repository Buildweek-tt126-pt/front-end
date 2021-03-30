import React from "react"
import { Route, Switch } from "react-router-dom"

import RecipesList from "./components/RecipesList"
import MainBody from "./components/MainBody"
// import PrivateRoute from "./components/PrivateRoute"
import AddRecipe from "./components/AddRecipe"

function App() {
  return (
    <div>      
      <Switch>
        <Route path="/recipes" component={RecipesList} />
        <Route path="/add-recipe" component={AddRecipe} />
        <Route component={MainBody} />
      </Switch>
    </div>
  );
}

export default App;
