import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';

import resultList from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';

/*import App from './components/App';*/
import homePage from './components/homePage';
import UserCenter from './components/UserCenter';
import BlogNewd from './components/BlogNewed';
import BlogDetail from './components/BlogDetail';
/*import Middleware from './middlewares/Middleware'*/
import blogMessageMiddleware from './middlewares/blogMessageMiddleware';
import blogLoadedMiddleware from './middlewares/blogLoadedMiddleware';
import blogDetailLoadedMiddleware from './middlewares/blogDetailLoadedMiddleware';
import deleteBlogMiddleware from './middlewares/deleteBlogMiddleware';
import updateBlogMiddleware from './middlewares/updateBlogMiddleware';


const store = createStore(
    resultList,
    applyMiddleware(blogMessageMiddleware,blogLoadedMiddleware,blogDetailLoadedMiddleware,deleteBlogMiddleware,updateBlogMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={homePage}/>
        <Route path="/userCenter" component={UserCenter}/>
        <Route path="/blogNewed" component={BlogNewd}/>
        <Route path="/blogDetail/:id" component={BlogDetail}/>
      </Router>
    </Provider>,
    document.getElementById('app')
);