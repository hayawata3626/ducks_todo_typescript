import { Component } from "react"
import * as React from 'react';
import "../App.css"
import AddTodo from "../containers/AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
      </div>
    )
  }
}

export default App
