import mongoose from 'mongoose';

const Blog = mongoose.model('Blog', { 
  blogName:String,
  blogContent:String,
  blogTag:String,
  userName:String,
  publishDate:String
});

export default Blog;