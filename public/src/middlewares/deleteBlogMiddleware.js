/**
 * Created by yujuan on 17-2-12.
 */
import request from 'superagent';
const deleteBlogMiddleware = store=>next=>action=>{
  switch(action.type){
    case 'BLOG_DELETED':
      request.delete(`/blogs/${action.id}`)
          .end((err,res)=>{
            if(res.ok&&!err){
              store.dispatch({
                type:'USERBLOGS_LOADED'
              })
            }
          });
      break;
  }
  next(action); 
};

export default deleteBlogMiddleware;
