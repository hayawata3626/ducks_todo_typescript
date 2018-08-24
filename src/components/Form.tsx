import React from "react"
import Button from "@material-ui/core/Button"

export default class Form extends React.Component {
  private inputText: HTMLInputElement;
  render() {
    return (
      <form
        className="addToto"
        onSubmit={e => {
          e.preventDefault();
          if (!this.refs.inputText.value.trim()) {
            return
          }
          this.props.addTodo(this.refs.inputText.value)
          this.refs.inputText.value = ""
        }}
      >
        <input type="text" className="addToto_input" ref="inputText" />
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "20px" }}
          onClick={() => this.props.addTodo(this.refs.inputText.value)}
        >
          Submit
        </Button>
      </form>
    )
  }
}
