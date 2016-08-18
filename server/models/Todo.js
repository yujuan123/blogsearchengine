import mongoose from 'mongoose';

const Todo = mongoose.model('Todo', { 
  val1:String,
  val2:String
});

export default Todo;