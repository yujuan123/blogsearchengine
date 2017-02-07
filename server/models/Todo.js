import mongoose from 'mongoose';

const Todo = mongoose.model('Todo', { 
  blogName:String,
  blogContent:String,
  blogTag:String
});

export default Todo;