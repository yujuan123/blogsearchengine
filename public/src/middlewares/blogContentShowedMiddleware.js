/**
 * Created by yujuan on 17-2-11.
 */
import request from 'superagent';
const blogContentShowedMiddleware = store=>next=>action=> {
  switch (action.type) {
    case 'USERBLOGS_LOADED':
      request.get('/blogs')
          .end((err, res)=> {
            if (res.ok && !err) {
              next({
                type: "BLOGCONTENT_SHOWED",
                data: res.body
              })
            }
          });
      break;
  }
  next(action);
};
export default blogContentShowedMiddleware;
