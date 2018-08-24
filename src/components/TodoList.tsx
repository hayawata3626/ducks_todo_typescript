import React from "react"
import Todo from "./Todo"
import Card from "@material-ui/core/Card"

export default class TodoList extends React.Component {
  render() {
    return (
      <Card className="todoList">
        <h2 className="todoList_title">TODO</h2>
        <div className="notCompleted">
          {this.props.todos.map(todo => (
            <Todo key={todo.id} toggleTodo={this.props.toggleTodo} {...todo} />
          ))}
        </div>
      </Card>
    )
  }
}
