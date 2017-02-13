import mongoose from 'mongoose';

const Blog = mongoose.model('Todo', { 
  blogName:String,
  blogContent:String,
  blogTag:String
});

export default Blog;