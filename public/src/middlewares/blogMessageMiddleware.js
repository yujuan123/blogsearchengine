/**
 * Created by yujuan on 17-2-8.
 */
/*发送数据到数据库*/
import request from 'superagent';

const blogMessageMiddleware = store=>next=>action=> {
  switch (action.type) {
    case 'BLOGCONTENT_SENT':
      request.post('/blogs/blogContent')
          .type('json')
          .send(action.data)
          .end((err, res)=> {
            if (res.ok && !err) {
              console.log("you are beautiful");
              store.dispatch({
                type:'USERBLOGS_LOADED'
              })
            }
          });
      break;

  }
  next(action);
};

export default blogMessageMiddleware;