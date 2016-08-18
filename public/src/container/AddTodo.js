import { connect } from 'react-redux';
import AddTodoInput from '../components/AddTodoInput';
import { addTodo } from '../actions';

const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=> ({
  addTodo: (val1,val2)=> {
    dispatch(addTodo(val1,val2));
  }
});

const AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodoInput);

export default AddTodo;
                                                      