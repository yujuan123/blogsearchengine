/**
 * Created by yujuan on 17-2-11.
 */
import request from 'superagent';
const blogDetailLoadedMiddleware = store=>next=>action=>{
  switch(action.type){
    case 'BLOGDETAIL_LOADED':
      request.get(`/blogs/${action.id}`)
          .end((err,res)=>{
            if(res.ok&&!err){
              next({
                type:'BLOGDETAIL_SHOWED',
                data:res.body
              });
            }
          });
      break;
      
  }
  next(action);
};

export default blogDetailLoadedMiddleware;
