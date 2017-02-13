/**
 * Created by yujuan on 17-2-11.
 */
import request from 'superagent';
const BlogDetailLoadedMiddleware = store=>next=>action=>{
  switch(action.type){
    case 'BLOGID_GOT':
      request.get("/blogs/$(action.data)")
      
  }
};

export default BlogDetailLoadedMiddleware;
