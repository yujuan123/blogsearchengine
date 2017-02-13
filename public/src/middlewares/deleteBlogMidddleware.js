/**
 * Created by yujuan on 17-2-12.
 */
import request from 'superagent';
const sendBlogIdMiddleware = store=>next=>action=>{
  switch(action.type){
    case 'BLOG_DELETED':
      request.
  }
};

export default sendBlogIdMiddleware;
