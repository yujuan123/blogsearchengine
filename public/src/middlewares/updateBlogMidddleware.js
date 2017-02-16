/**
 * Created by yujuan on 17-2-13.
 */
import request from 'superagent';
const updateBlogMiddleware = store=>next=>action=>{
  switch (action.type){
    case 'BLOGUPDATED_SENT':
      request.put(`/blogs/${action.data.blogId}`)
          .type('json')
          .send(action.data)
          .end((err,res)=>{
            if(res.ok&&!err){
              console.log("更新的数据："+res.body.blogName);
              store.dispatch({
                type:'USERBLOGS_LOADED'
              })
            }
          });
      break;
  }
  next(action);
};

export default updateBlogMiddleware;
