import React from "react"
import { Route, Switch } from "react-router-dom"
import styled from "styled-components"

import RecipesList from "./components/RecipesList"
import MainBody from "./components/MainBody"
// import PrivateRoute from "./components/PrivateRoute"
import AddRecipe from "./components/AddRecipe"

const StyledApp = styled.div`
background-color: #f5f5f5;
overflow: hidden;
`

function App() {
  return (
    <StyledApp>      
      <Switch>
        <Route path="/recipes" component={RecipesList} />
        <Route path="/add-recipe" component={AddRecipe} />
        <Route component={MainBody} />
      </Switch>

    </StyledApp>
  );
}

export default App;
