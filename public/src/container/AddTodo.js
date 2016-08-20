import { connect } from 'react-redux';
import AddTodoInput from '../components/AddTodoInput';
import { addMaterial } from '../actions';

const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=> ({
  addMaterial: (val1,val2)=> {
    dispatch(addMaterial({source:val1,amount:val2}));
  }
});

const AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodoInput);

export default AddTodo;
                                                      