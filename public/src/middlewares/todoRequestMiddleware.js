import request from 'superagent';

const todoRequestMiddleware = store=> next=> action=> {

  switch (action.type) {
  case 'ADD_TODO':
    request.post('/todos')
        .type('form')
        .send({
          val1:action.val1,
          val2:action.val2
        })
        .end(()=> {
          store.dispatch({
            type: 'INIT'
          });
        });
    break;
  case 'INIT':
    request.get('/todos')
        .end((err, res)=> {
          console.log(res.body);
          next({
            type: 'TODO_LOADED',
            data: res.body
          });
        });
    break;
  case 'DELETE_TODO':
    request.delete('/todos/' + action.id)
        .end(()=> {
          store.dispatch({
            type: 'INIT'
          });
        });
    break;
  }
  next(action);
};

export default todoRequestMiddleware;
