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

.container {
  display: flex;
  align-items: center;
}

.left-side {
  background-image: url("https://images.unsplash.com/photo-1561583953-29d04b8cf5ee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80");
  width: 50vw;
  height: 85vh;
  background-repeat: no-repeat;
  background-size: cover;
}
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
