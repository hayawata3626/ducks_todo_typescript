import React from "react"
import Card from "@material-ui/core/Card"
import Checkbox from "@material-ui/core/Checkbox"
import Typography from "@material-ui/core/Typography"

export default class Todo extends React.Component {
  render() {
    return (
      <Card className="todo">
        <div className="todo_header">
          <Checkbox
            tabIndex={-1}
            disableRipple
            onClick={() => this.props.toggleTodo(this.props.id)}
          />
          <Typography
            className={
              this.props.completed ? "completed todo_content" : "todo_content"
            }
          >
            {this.props.text}
          </Typography>
        </div>
        <div className="toggleBtn" />
      </Card>
    )
  }
}
