import { connect } from "react-redux";
import * as addTodoModule from "../modules/todo";
import Form from "../components/Form";

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodoModule.addTodo(text))
    };
};

export default connect(null, mapDispatchToProps)(Form);