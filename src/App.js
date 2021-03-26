import React from "react"
import { Route, Link, Switch } from "react-router-dom"
import styled from "styled-components"

import Header from "./components/Header"
import SignUpForm from "./components/SignUpForm"

import './App.css';

const StyledApp = styled.div`
overflow: hidden;

.container {
  display: flex;
  align-items: center;
}

.left-side {
  background-image: url("https://images.unsplash.com/photo-1561583953-29d04b8cf5ee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80");
  width: 50vw;
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.right-side {
  margin: 0 auto;
}
`

function App() {
  return (
    <StyledApp>
      <Header />
      <div className="container">
        <div className="left-side">
          {/* Background Image Here */}
        </div>
        <div className="right-side">
          <SignUpForm />
        </div>
      </div>
    </StyledApp>
  );
}

export default App;
