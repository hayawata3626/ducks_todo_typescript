import { connect } from "react-redux";
import * as todoListModule from "../modules/todo";
import TodoList from "../components/TodoList";

const mapStateToProps = state => {
    return {
        todos: state.Todo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: (id) => dispatch(todoListModule.toggleTodo(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);