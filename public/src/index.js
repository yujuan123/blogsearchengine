import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';

import resultList from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';
/*import App from './components/App';*/
import UserCenter from './components/UserCenter';
import BlogNewd from './components/BlogNewed';

const store = createStore(
    resultList
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={UserCenter}/>
        <Route path="/blogNewed" component={BlogNewd}/>
      </Router>
    </Provider>,
    document.getElementById('app')
);